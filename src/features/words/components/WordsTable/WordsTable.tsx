import React, { useState } from "react";

import styles from "./WordsTable.module.css";
import type { WordsTableProps, FilterStatus } from "../../../../types/types";

export const WordsTable: React.FC<WordsTableProps> = ({
 words,
 onEdit,
 onDelete,
 onToggleStatus,
}) => {
 const [filter, setFilter] = useState<FilterStatus>("all");

 const filteredWords = words.filter((word) => {
  if (filter === "all") return true;
  return word.status === filter;
 });

 return (
  <section className={`${styles.card} ${styles["card-flush"]} `}>
   <div className={styles["table-responsive"]}>
    <table className={styles["data-table"]}>
     <thead>
      <tr>
       <th>Английский</th>
       <th>Перевод</th>
       <th>
        <select
         className={styles["filter-select"]}
         value={filter}
         onChange={(e) => setFilter(e.target.value as FilterStatus)}
        >
         <option value="all">Все статусы</option>
         <option value="learning">Учить</option>
         <option value="learned">Выучено</option>
        </select>
       </th>
       <th>Действия</th>
      </tr>
     </thead>

     <tbody>
      {filteredWords.length === 0 ? (
       <tr>
        <td colSpan={4} className={styles["td-filter"]}>
         {filter === "all" ? "Слов пока нет" : "Нет слов с таким статусом"}
        </td>
       </tr>
      ) : (
       filteredWords.map((word) => (
        <tr key={word.id}>
         <td>{word.english}</td>
         <td>{word.translation}</td>

         <td>
          <button
           type="button"
           className={`${styles.status} ${styles[`status--${word.status}`]} `}
           onClick={() => onToggleStatus(word.id)}
          >
           {word.status === "learned" ? "Выучено" : "Учить"}
          </button>
         </td>

         <td className={styles["table-actions"]}>
          <button
           type="button"
           className={`${styles["btn"]} ${styles["btn-sm"]} ${styles["btn-outline"]}`}
           onClick={() => onEdit(word)}
          >
           Ред.
          </button>

          <button
           type="button"
           className={styles["icon-btn"]}
           title="Delete"
           aria-label={`Удалить слово ${word.english}`}
           onClick={() => onDelete(word.id)}
          >
           &times;
          </button>
         </td>
        </tr>
       ))
      )}
     </tbody>
    </table>
   </div>
  </section>
 );
};
