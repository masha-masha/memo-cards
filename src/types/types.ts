export type WordStatus = 'learning' | 'learned' | 'review';

export interface Word {
  id: number;
  english: string;
  translation: string;
  status: WordStatus;
  streak?: number;
  lastStudiedAt?: number; 
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export interface WordsTableProps {
 words: Word[];
 onEdit: (word: Word) => void;
 onDelete: (id: number) => void;
 onToggleStatus: (id: number) => void;
}


export interface FlashcardProps {
  card: Word;
  isFlipped: boolean;
  animationClass: string;
  onFlip: () => void;
}

export interface StatsRowProps {
 remaining: number;
 learned: number;
 total: number;
}

export type FilterStatus = "all" | WordStatus;

export interface WordFormProps {
 editingWord: Word | null;
 onSubmit: (english: string, translation: string) => void;
 onCancel: () => void;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}