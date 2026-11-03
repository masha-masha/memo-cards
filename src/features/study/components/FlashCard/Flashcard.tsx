import React from "react";

import styles from "./Flashcard.module.css";
import type { FlashcardProps } from "../../../../types/types";

export const Flashcard: React.FC<FlashcardProps> = ({
 card,
 isFlipped,
 animationClass,
 onFlip,
}) => {
 const isReview = card.status === "review";

 return (
  <div
   className={`${styles["flashcard-wrapper"]} ${styles[animationClass]}`}
   onClick={onFlip}
   title="Нажмите, чтобы перевернуть"
  >
   <div
    className={`${styles["flashcard-inner"]} ${isFlipped ? styles["is-flipped"] : ""}`}
   >
    <div className={`${styles["flashcard-face"]} ${styles["flashcard-front"]}`}>
     <span
      className={`${styles["card-badge"]} ${isReview ? styles["card-badge--review"] : ""}}`}
     >
      {isReview ? "🔄 Повторение" : "Английский"}
     </span>
     <div className={styles["word"]}>{card.english}</div>
     <p className={styles["hint"]}>Кликните, чтобы увидеть перевод</p>
    </div>
    <div className={`${styles["flashcard-face"]} ${styles["flashcard-back"]}`}>
     <span className={styles["card-badge"]}>Перевод</span>
     <div className={`${styles["word"]} ${styles["word--transition"]}`}>
      {card.translation}
     </div>
     <p className={styles["hint"]}>Кликните, чтобы увидеть слово</p>
    </div>
   </div>
  </div>
 );
};
