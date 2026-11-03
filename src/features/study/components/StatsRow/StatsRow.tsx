import React from "react";

import styles from "./StatsRow.module.css"
import type { StatsRowProps } from "../../../../types/types";


export const StatsRow: React.FC<StatsRowProps> = ({
 remaining,
 learned,
 total,
}) => {
 return (
  <div className={styles["stats-row"]}>
   <div className={styles["stat-box"]}>
    <div className={`${styles["num"]} ${styles["num-remaining"]}`} >
     {remaining}
    </div>
    <div className={styles["lbl"]}>Изучается</div>
   </div>
   <div className={styles["stat-box"]}>
    <div className={`${styles["num"]} ${styles["num-learned"]}`} >
     {learned}
    </div>
    <div className={styles["lbl"]}>Выучено</div>
   </div>
   <div className={styles["stat-box"]}>
    <div className={`${styles["num"]} ${styles["num-total"]}`}>
     {total}
    </div>
    <div className={styles["lbl"]}>Всего</div>
   </div>
  </div>
 );
};
