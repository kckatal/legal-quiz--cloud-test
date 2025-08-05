'use client';

import { QuizResult } from '@/types/quiz';
import { CheckCircle, Phone, Mail, User } from 'lucide-react';

interface ResultCardProps {
  result: QuizResult;
  onContactClick: () => void;
  onRetakeQuiz: () => void;
}

export default function ResultCard({ result, onContactClick, onRetakeQuiz }: ResultCardProps) {
  const { recommendedArea, confidence, alternativeAreas } = result;

  const getConfidenceColor = (conf: string) => {
    switch (conf) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConfidenceText = (conf: string) => {
    switch (conf) {
      case 'high': return 'High Confidence Match';
      case 'medium': return 'Good Match';
      case 'low': return 'Possible Match';
      default: return 'Match Found';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="w-6 h-6" />
          <h2 className="text-2xl font-bold">We Found Your Match!</h2>
        </div>
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(confidence)}`}>
          {getConfidenceText(confidence)}
        </span>
      </div>

      {/* Main Result */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {recommendedArea.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {recommendedArea.description}
        </p>

        {/* Attorney Info */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <User className="w-4 h-4" />
            Your Attorney
          </h4>
          <div className="space-y-2">
            <div>
              <p className="font-medium text-gray-900">{recommendedArea.attorney.name}</p>
              <p className="text-sm text-gray-600">{recommendedArea.attorney.title}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 text-sm">
              <a
                href={`tel:${recommendedArea.attorney.phone}`}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
              >
                <Phone className="w-4 h-4" />
                {recommendedArea.attorney.phone}
              </a>
              <a
                href={`mailto:${recommendedArea.attorney.email}`}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
              >
                <Mail className="w-4 h-4" />
                {recommendedArea.attorney.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Areas */}
      {alternativeAreas.length > 0 && (
        <div className="p-6 border-b border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">
            Other Practice Areas That Might Help
          </h4>
          <div className="space-y-2">
            {alternativeAreas.slice(0, 2).map((area) => (
              <div key={area.id} className="text-sm">
                <span className="font-medium text-gray-700">{area.name}</span>
                <span className="text-gray-500 ml-2">- {area.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onContactClick}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact {recommendedArea.attorney.name}
          </button>
          <button
            onClick={onRetakeQuiz}
            className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}