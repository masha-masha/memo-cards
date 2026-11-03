import React, { useState } from "react";

import styles from "./StudyPage.module.css";
import { useStudy } from "./hooks/useStudy";
import { StatsRow } from "./components/StatsRow/StatsRow";
import { Flashcard } from "./components/FlashCard/Flashcard";
import { EmptyState } from "./components/EmptyState/EmptyState";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { Modal } from "./components/Modal/Modal";

export const Study: React.FC = () => {
 const {
  currentCard,
  isFlipped,
  animationClass,
  total,
  learnedCount,
  remainingCount,
  progressPercent,
  handleAnswer,
  toggleFlip,
  resetAll,
 } = useStudy();

 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleConfirmReset = () => {
  resetAll();
  setIsModalOpen(false);
 };

 const hasWords = total > 0;
 const allLearned = hasWords && remainingCount === 0;

 return (
  <main className={styles["site-main"]}>
   <h2 className={styles["page-title"]}>Свои карточки</h2>
   <p className={styles["page-lead"]}>
    Листайте карточки. Отмечайте слова, которые вы знаете, чтобы отслеживать
    свой прогресс.
   </p>

   <StatsRow remaining={remainingCount} learned={learnedCount} total={total} />

   <div className={styles["card-scene"]}>
    {currentCard ? (
     <Flashcard
      card={currentCard}
      isFlipped={isFlipped}
      animationClass={animationClass}
      onFlip={toggleFlip}
     />
    ) : (
     <EmptyState variant={hasWords ? "all-learned" : "no-words"} />
    )}
   </div>

   {!allLearned && (
    <div className={styles["btn-group"]}>
     <button
      type="button"
      className={`${styles["btn"]} ${styles["btn-outline"]}`}
      onClick={() => handleAnswer(false)}
      disabled={!currentCard}
     >
      Не знаю
     </button>
     <button
      type="button"
      className={`${styles["btn"]} ${styles["btn-primary"]}`}
      onClick={() => handleAnswer(true)}
      disabled={!currentCard}
     >
      Знаю
     </button>
    </div>
   )}

   <ProgressBar percent={progressPercent} />

   {hasWords && (
    <div className={styles["reset-row"]}>
     <button
      type="button"
      className={`${styles["btn"]} ${styles["btn-danger"]}`}
      onClick={() => setIsModalOpen(true)}
     >
      Удалить все слова и сбросить прогресс
     </button>
    </div>
   )}

   <Modal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    onConfirm={handleConfirmReset}
    title="Вы уверены?"
    message="Это действие навсегда удалит все ваши слова и накопленный прогресс. Восстановить данные будет невозможно."
   />
  </main>
 );
};

export default Study;
