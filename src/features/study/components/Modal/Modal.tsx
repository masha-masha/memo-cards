import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import type { ModalProps } from "../../../../types/types";

export const Modal: React.FC<ModalProps> = ({
 isOpen,
 onClose,
 onConfirm,
 title,
 message,
}) => {
 useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
   if (e.key === "Escape") onClose();
  };
  if (isOpen) window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
 }, [isOpen, onClose]);

 if (!isOpen) return null;

 return (
  <div className={styles["modal-overlay"]} onClick={onClose}>
   <div
    className={styles["modal-content"]}
    onClick={(e) => e.stopPropagation()}
   >
    <h3 className={styles["modal-title"]}>{title}</h3>
    <p className={styles["modal-message"]}>{message}</p>
    <div className={styles["modal-actions"]}>
     <button className={`${styles["btn"]} ${styles["btn-secondary"]}`} onClick={onClose}>
      Отмена
     </button>
     <button className={`${styles["btn"]} ${styles["btn-danger"]}`} onClick={onConfirm}>
      Удалить всё
     </button>
    </div>
   </div>
  </div>
 );
};
