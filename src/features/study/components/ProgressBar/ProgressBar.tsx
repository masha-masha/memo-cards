import React from "react";
import styles from "./ProgressBar.module.css"

interface ProgressBarProps {
 percent: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
 return (
  <div className={styles["progress-container"]}>
   <div className={styles["progress-bar"]}>
    <div className={styles["progress-fill"]} style={{ width: `${percent}%` }} />
   </div>
   <span className={styles["progress-label"]}>{percent}% выучено</span>
  </div>
 );
};
