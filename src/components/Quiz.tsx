'use client';

import { useState } from 'react';
import { UserAnswers, QuizResult } from '@/types/quiz';
import { quizQuestions } from '@/data/quizQuestions';
import { calculateQuizResult } from '@/utils/quizLogic';
import QuizCard from './QuizCard';
import ProgressBar from './ProgressBar';
import ResultCard from './ResultCard';
import ContactForm from './ContactForm';
import { ArrowRight, ArrowLeft } from 'lucide-react';

type QuizState = 'intro' | 'questions' | 'results' | 'contact';

export default function Quiz() {
  const [currentState, setCurrentState] = useState<QuizState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = () => {
    setCurrentState('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz complete - calculate results
      const result = calculateQuizResult(answers);
      setQuizResult(result);
      setCurrentState('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleContactClick = () => {
    setCurrentState('contact');
  };

  const handleBackToResults = () => {
    setCurrentState('results');
  };

  const handleRetakeQuiz = () => {
    setCurrentState('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizResult(null);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const canProceed = currentQuestion && answers[currentQuestion.id];

  if (currentState === 'intro') {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            What Kind of Legal Help Do You Need?
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Answer a few questions to find the right attorney for your situation. 
            This quiz takes about 2-3 minutes to complete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Quick & Easy</h3>
            <p className="text-sm text-blue-800">Just 5 simple questions about your situation</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Expert Matching</h3>
            <p className="text-sm text-green-800">Get connected with the right specialist</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Free Consultation</h3>
            <p className="text-sm text-purple-800">No obligation initial case review</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">Fast Response</h3>
            <p className="text-sm text-orange-800">Hear back within 24 hours</p>
          </div>
        </div>

        <button
          onClick={handleStartQuiz}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
        >
          Start Quiz
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  if (currentState === 'questions') {
    return (
      <div className="w-full max-w-2xl">
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={quizQuestions.length} 
        />
        
        <QuizCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          currentAnswer={answers[currentQuestion.id]}
        />

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLastQuestion ? 'Get Results' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  if (currentState === 'results' && quizResult) {
    return (
      <ResultCard
        result={quizResult}
        onContactClick={handleContactClick}
        onRetakeQuiz={handleRetakeQuiz}
      />
    );
  }

  if (currentState === 'contact' && quizResult) {
    return (
      <ContactForm
        practiceArea={quizResult.recommendedArea}
        onBack={handleBackToResults}
      />
    );
  }

  return null;
}