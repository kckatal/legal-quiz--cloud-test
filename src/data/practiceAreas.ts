import { PracticeArea } from '@/types/quiz';

export const practiceAreas: PracticeArea[] = [
  {
    id: 'family-law',
    name: 'Family Law',
    description: 'Divorce, child custody, adoption, and domestic relations matters.',
    attorney: {
      name: 'Sarah Johnson',
      email: 'sjohnson@lawfirm.com',
      phone: '(555) 123-4567',
      title: 'Partner, Family Law Division'
    },
    keywords: ['divorce', 'custody', 'family', 'marriage', 'children', 'adoption', 'domestic']
  },
  {
    id: 'criminal-defense',
    name: 'Criminal Defense',
    description: 'Defense against criminal charges, DUI, and criminal appeals.',
    attorney: {
      name: 'Michael Chen',
      email: 'mchen@lawfirm.com',
      phone: '(555) 234-5678',
      title: 'Senior Partner, Criminal Defense'
    },
    keywords: ['criminal', 'defense', 'charges', 'dui', 'arrest', 'court', 'police']
  },
  {
    id: 'personal-injury',
    name: 'Personal Injury',
    description: 'Car accidents, slip and fall, medical malpractice, and injury claims.',
    attorney: {
      name: 'Lisa Rodriguez',
      email: 'lrodriguez@lawfirm.com',
      phone: '(555) 345-6789',
      title: 'Partner, Personal Injury'
    },
    keywords: ['accident', 'injury', 'medical', 'malpractice', 'compensation', 'insurance', 'damages']
  },
  {
    id: 'business-law',
    name: 'Business & Corporate Law',
    description: 'Business formation, contracts, employment law, and corporate litigation.',
    attorney: {
      name: 'David Park',
      email: 'dpark@lawfirm.com',
      phone: '(555) 456-7890',
      title: 'Senior Partner, Business Law'
    },
    keywords: ['business', 'corporate', 'contract', 'employment', 'startup', 'company', 'commercial']
  },
  {
    id: 'real-estate',
    name: 'Real Estate Law',
    description: 'Property transactions, landlord-tenant disputes, and real estate litigation.',
    attorney: {
      name: 'Jennifer Wilson',
      email: 'jwilson@lawfirm.com',
      phone: '(555) 567-8901',
      title: 'Partner, Real Estate Division'
    },
    keywords: ['property', 'real estate', 'landlord', 'tenant', 'purchase', 'sale', 'lease']
  },
  {
    id: 'estate-planning',
    name: 'Estate Planning & Probate',
    description: 'Wills, trusts, estate administration, and probate proceedings.',
    attorney: {
      name: 'Robert Davis',
      email: 'rdavis@lawfirm.com',
      phone: '(555) 678-9012',
      title: 'Partner, Estate Planning'
    },
    keywords: ['will', 'trust', 'estate', 'probate', 'inheritance', 'planning', 'legacy']
  }
];