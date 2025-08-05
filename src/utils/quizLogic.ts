import { QuizQuestion, UserAnswers, QuizResult, PracticeArea } from '@/types/quiz';
import { practiceAreas } from '@/data/practiceAreas';
import { quizQuestions } from '@/data/quizQuestions';

export function calculateQuizResult(answers: UserAnswers): QuizResult {
  const areaScores: { [areaId: string]: number } = {};
  
  // Initialize all practice area scores to 0
  practiceAreas.forEach(area => {
    areaScores[area.id] = 0;
  });

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (!question) return;

    const questionWeight = question.weight || 1;
    const answerArray = Array.isArray(answer) ? answer : [answer];

    answerArray.forEach(answerValue => {
      const option = question.options.find(opt => opt.value === answerValue);
      if (!option) return;

      option.practiceAreas.forEach(areaId => {
        areaScores[areaId] += option.score * questionWeight;
      });
    });
  });

  // Find the area with the highest score
  const sortedAreas = Object.entries(areaScores)
    .map(([areaId, score]) => ({
      area: practiceAreas.find(area => area.id === areaId)!,
      score
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (sortedAreas.length === 0) {
    // Fallback to family law if no matches
    return {
      recommendedArea: practiceAreas[0],
      score: 0,
      confidence: 'low',
      alternativeAreas: []
    };
  }

  const topArea = sortedAreas[0];
  const alternativeAreas = sortedAreas.slice(1, 4).map(item => item.area);

  // Determine confidence level
  const maxPossibleScore = calculateMaxPossibleScore(answers);
  const confidenceRatio = topArea.score / maxPossibleScore;
  
  let confidence: 'high' | 'medium' | 'low';
  if (confidenceRatio >= 0.7) {
    confidence = 'high';
  } else if (confidenceRatio >= 0.4) {
    confidence = 'medium';
  } else {
    confidence = 'low';
  }

  return {
    recommendedArea: topArea.area,
    score: topArea.score,
    confidence,
    alternativeAreas
  };
}

function calculateMaxPossibleScore(answers: UserAnswers): number {
  let maxScore = 0;
  
  Object.keys(answers).forEach(questionId => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (!question) return;

    const questionWeight = question.weight || 1;
    const maxOptionScore = Math.max(...question.options.map(opt => opt.score));
    maxScore += maxOptionScore * questionWeight;
  });

  return maxScore;
}

export function getNextQuestion(
  currentQuestionIndex: number, 
  totalQuestions: number
): number | null {
  if (currentQuestionIndex < totalQuestions - 1) {
    return currentQuestionIndex + 1;
  }
  return null; // Quiz is complete
}

export function isQuizComplete(answers: UserAnswers): boolean {
  const requiredQuestions = quizQuestions.filter(q => q.weight && q.weight > 1);
  return requiredQuestions.every(question => 
    answers[question.id] && 
    (Array.isArray(answers[question.id]) ? 
      (answers[question.id] as string[]).length > 0 : 
      answers[question.id] !== '')
  );
}

export function validateAnswer(question: QuizQuestion, answer: string | string[]): boolean {
  if (question.type === 'single') {
    return typeof answer === 'string' && answer.length > 0;
  } else {
    return Array.isArray(answer) && answer.length > 0;
  }
}