import { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'situation-type',
    question: 'What type of situation best describes your legal need?',
    type: 'single',
    weight: 3,
    options: [
      {
        id: 'personal-injury-incident',
        text: 'I was injured due to someone else\'s negligence',
        value: 'personal-injury-incident',
        practiceAreas: ['personal-injury'],
        score: 10
      },
      {
        id: 'family-matter',
        text: 'I need help with a family or relationship matter',
        value: 'family-matter',
        practiceAreas: ['family-law'],
        score: 10
      },
      {
        id: 'criminal-charges',
        text: 'I\'ve been charged with a crime or arrested',
        value: 'criminal-charges',
        practiceAreas: ['criminal-defense'],
        score: 10
      },
      {
        id: 'business-issue',
        text: 'I have a business or employment related issue',
        value: 'business-issue',
        practiceAreas: ['business-law'],
        score: 10
      },
      {
        id: 'property-matter',
        text: 'I need help with property or real estate',
        value: 'property-matter',
        practiceAreas: ['real-estate'],
        score: 10
      },
      {
        id: 'estate-planning',
        text: 'I need help with wills, trusts, or estate planning',
        value: 'estate-planning',
        practiceAreas: ['estate-planning'],
        score: 10
      }
    ]
  },
  {
    id: 'urgency-level',
    question: 'How urgent is your legal matter?',
    type: 'single',
    weight: 2,
    options: [
      {
        id: 'immediate',
        text: 'Very urgent - I need help immediately',
        value: 'immediate',
        practiceAreas: ['criminal-defense', 'personal-injury'],
        score: 8
      },
      {
        id: 'soon',
        text: 'Important - I need help within the next few weeks',
        value: 'soon',
        practiceAreas: ['family-law', 'business-law', 'real-estate'],
        score: 6
      },
      {
        id: 'planning',
        text: 'Planning ahead - I have time to prepare',
        value: 'planning',
        practiceAreas: ['estate-planning', 'business-law'],
        score: 4
      }
    ]
  },
  {
    id: 'specific-issue',
    question: 'Which of these specific issues most closely matches your situation?',
    type: 'multiple',
    weight: 2,
    options: [
      {
        id: 'divorce-custody',
        text: 'Divorce, separation, or child custody',
        value: 'divorce-custody',
        practiceAreas: ['family-law'],
        score: 9
      },
      {
        id: 'car-accident',
        text: 'Car accident or motor vehicle incident',
        value: 'car-accident',
        practiceAreas: ['personal-injury'],
        score: 9
      },
      {
        id: 'workplace-injury',
        text: 'Workplace injury or workers compensation',
        value: 'workplace-injury',
        practiceAreas: ['personal-injury', 'business-law'],
        score: 7
      },
      {
        id: 'dui-charges',
        text: 'DUI/DWI or traffic violations',
        value: 'dui-charges',
        practiceAreas: ['criminal-defense'],
        score: 9
      },
      {
        id: 'contract-dispute',
        text: 'Contract disputes or business agreements',
        value: 'contract-dispute',
        practiceAreas: ['business-law'],
        score: 8
      },
      {
        id: 'employment-issues',
        text: 'Employment discrimination or wrongful termination',
        value: 'employment-issues',
        practiceAreas: ['business-law'],
        score: 8
      },
      {
        id: 'buying-selling-property',
        text: 'Buying or selling property',
        value: 'buying-selling-property',
        practiceAreas: ['real-estate'],
        score: 9
      },
      {
        id: 'landlord-tenant',
        text: 'Landlord/tenant disputes',
        value: 'landlord-tenant',
        practiceAreas: ['real-estate'],
        score: 8
      },
      {
        id: 'will-preparation',
        text: 'Creating a will or trust',
        value: 'will-preparation',
        practiceAreas: ['estate-planning'],
        score: 9
      },
      {
        id: 'probate-issues',
        text: 'Probate or estate administration',
        value: 'probate-issues',
        practiceAreas: ['estate-planning'],
        score: 8
      }
    ]
  },
  {
    id: 'financial-impact',
    question: 'What is the potential financial impact of your legal matter?',
    type: 'single',
    weight: 1,
    options: [
      {
        id: 'high-stakes',
        text: 'High financial stakes (over $50,000)',
        value: 'high-stakes',
        practiceAreas: ['business-law', 'personal-injury', 'real-estate'],
        score: 6
      },
      {
        id: 'moderate-stakes',
        text: 'Moderate financial impact ($10,000 - $50,000)',
        value: 'moderate-stakes',
        practiceAreas: ['family-law', 'real-estate', 'business-law'],
        score: 4
      },
      {
        id: 'low-stakes',
        text: 'Lower financial impact (under $10,000)',
        value: 'low-stakes',
        practiceAreas: ['family-law', 'criminal-defense'],
        score: 2
      },
      {
        id: 'unknown-stakes',
        text: 'I\'m not sure about the financial impact',
        value: 'unknown-stakes',
        practiceAreas: ['family-law', 'criminal-defense', 'personal-injury', 'business-law', 'real-estate', 'estate-planning'],
        score: 1
      }
    ]
  },
  {
    id: 'previous-legal-help',
    question: 'Have you previously worked with an attorney on this matter?',
    type: 'single',
    weight: 1,
    options: [
      {
        id: 'yes-unsatisfied',
        text: 'Yes, but I need better representation',
        value: 'yes-unsatisfied',
        practiceAreas: ['criminal-defense', 'personal-injury', 'family-law'],
        score: 3
      },
      {
        id: 'yes-need-specialist',
        text: 'Yes, but I need a specialist',
        value: 'yes-need-specialist',
        practiceAreas: ['business-law', 'estate-planning', 'real-estate'],
        score: 3
      },
      {
        id: 'no-first-time',
        text: 'No, this is my first time needing legal help',
        value: 'no-first-time',
        practiceAreas: ['family-law', 'criminal-defense', 'personal-injury', 'business-law', 'real-estate', 'estate-planning'],
        score: 2
      }
    ]
  }
];