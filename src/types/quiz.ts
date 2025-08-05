export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: QuizOption[];
  weight?: number; // For scoring importance
}

export interface QuizOption {
  id: string;
  text: string;
  value: string;
  practiceAreas: string[]; // Which practice areas this option suggests
  score: number; // Scoring weight for this option
}

export interface PracticeArea {
  id: string;
  name: string;
  description: string;
  attorney: {
    name: string;
    email: string;
    phone: string;
    title: string;
  };
  keywords: string[]; // For matching with quiz answers
}

export interface QuizResult {
  recommendedArea: PracticeArea;
  score: number;
  confidence: 'high' | 'medium' | 'low';
  alternativeAreas: PracticeArea[];
}

export interface UserAnswers {
  [questionId: string]: string | string[];
}