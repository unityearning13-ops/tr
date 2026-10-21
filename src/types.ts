export interface RuleItem {
  id: number;
  text: string;
  category: 'daily' | 'performance' | 'terms';
}

export interface VacancyRuleSection {
  titleEn: string;
  titleBn: string;
  items: {
    id: number;
    textBn: string;
    textEn?: string;
  }[];
}

export interface Vacancy {
  id: string;
  title: string;
  category: string;
  descriptionEn: string;
  descriptionBn: string;
  hasDetailedRules: boolean;
  sections?: {
    daily?: {
      titleEn: string;
      titleBn: string;
      items: { id: number; textBn: string; textEn: string }[];
    };
    performance?: {
      titleEn: string;
      titleBn: string;
      items: { id: number; textBn: string; textEn: string }[];
    };
    terms?: {
      titleEn: string;
      titleBn: string;
      items: { id: number; textBn: string; textEn: string }[];
    };
  };
}
