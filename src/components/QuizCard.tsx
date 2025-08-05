'use client';

import { QuizQuestion, QuizOption } from '@/types/quiz';
import { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (questionId: string, answer: string | string[]) => void;
  currentAnswer?: string | string[];
}

export default function QuizCard({ question, onAnswer, currentAnswer }: QuizCardProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array.isArray(currentAnswer) ? currentAnswer : currentAnswer ? [currentAnswer] : []
  );

  const handleOptionClick = (option: QuizOption) => {
    if (question.type === 'single') {
      const newAnswer = option.value;
      setSelectedAnswers([newAnswer]);
      onAnswer(question.id, newAnswer);
    } else {
      const isSelected = selectedAnswers.includes(option.value);
      const newAnswers = isSelected
        ? selectedAnswers.filter(answer => answer !== option.value)
        : [...selectedAnswers, option.value];
      
      setSelectedAnswers(newAnswers);
      onAnswer(question.id, newAnswers);
    }
  };

  const isSelected = (optionValue: string) => selectedAnswers.includes(optionValue);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {question.question}
        </h2>
        {question.type === 'multiple' && (
          <p className="text-sm text-gray-600">
            Select all that apply
          </p>
        )}
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 text-left ${
              isSelected(option.value)
                ? 'border-blue-500 bg-blue-50 text-blue-900'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {isSelected(option.value) ? (
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
            <span className="text-base font-medium">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}