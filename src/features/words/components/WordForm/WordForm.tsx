import React, { useEffect, useState } from "react";

import styles from "./WordForm.module.css";
import type { WordFormProps } from "../../../../types/types";

export const WordForm: React.FC<WordFormProps> = ({
 editingWord,
 onSubmit,
 onCancel,
}) => {
 const [english, setEnglish] = useState("");
 const [translation, setTranslation] = useState("");

 useEffect(() => {
  if (editingWord) {
   setEnglish(editingWord.english);
   setTranslation(editingWord.translation);
  } else {
   setEnglish("");
   setTranslation("");
  }
 }, [editingWord]);

 const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();

  const englishValue = english.trim();
  const translationValue = translation.trim();

  if (!englishValue || !translationValue) return;

  onSubmit(englishValue, translationValue);
  setEnglish("");
  setTranslation("");
 };

 const handleCancel = () => {
  setEnglish("");
  setTranslation("");
  onCancel();
 };

 return (
  <section className={`${styles.card} ${styles["add-card"]}`}>
   <div className={styles["card-body"]}>
    <h3 className={styles["section-heading"]}>
     {editingWord ? "Редактировать слово" : "Добавить слово"}
    </h3>

    <form className={styles["form-row"]} onSubmit={handleSubmit}>
     <div className={styles["field"]}>
      <label className={styles["form-label"]} htmlFor="english">
       Английский
      </label>
      <input
       id="english"
       className={styles["form-control"]}
       value={english}
       onChange={(event) => setEnglish(event.target.value)}
      />
     </div>

     <div className={styles["field"]}>
      <label className={styles["form-label"]} htmlFor="translation">
       Перевод
      </label>
      <input
       id="translation"
       className={styles["form-control"]}
       placeholder="привет"
       value={translation}
       onChange={(event) => setTranslation(event.target.value)}
      />
     </div>

     <button
      type="submit"
      className={`${styles["btn"]} ${styles["btn-primary"]}`}
     >
      {editingWord ? "Сохранить" : "Добавить слово"}
     </button>

     {editingWord && (
      <button
       type="button"
       className={`${styles["btn"]} ${styles["btn-secondary"]} `}
       onClick={handleCancel}
      >
       Отменить
      </button>
     )}
    </form>
   </div>
  </section>
 );
};
