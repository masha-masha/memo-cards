import React from "react";

import styles from "./Pagination.module.css"
import type { PaginationProps } from "../../../../types/types";



export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Пагинация">
      <button
        type="button"
        className={styles["btn-primary"]}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Назад
      </button>

      <span>
        Страница {page} из {totalPages}
      </span>

      <button
        type="button"
        className={styles["btn-primary"]}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Вперёд
      </button>
    </nav>
  );
};