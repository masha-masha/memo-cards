import React from 'react';

import styles from "./EmptyState.module.css"

interface EmptyStateProps {
  variant: 'no-words' | 'all-learned';
}

export const EmptyState: React.FC<EmptyStateProps> = ({ variant }) => {
  if (variant === 'no-words') {
    return (
      <div className={styles["flashcard-empty"]}>
        <p>В словаре пока нет слов для тренировки.</p>
        <span>Добавьте их на вкладке "Список слов"</span>
      </div>
    );
  }

  return (
    <div className={`${styles["flashcard-empty"]} ${styles["flashcard-empty--success"]}`}>
      <p>Все карточки выучены!</p>
      <span>Добавьте новые слова на вкладке "Список слов".</span>
    </div>
  );
};