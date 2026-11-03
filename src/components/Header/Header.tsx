import styles from "./Header.module.css"

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
 const [active, setActive] = useState(1);

 const headerButtons = [
  { id: 1, name: "Учить", link: "/" },
  { id: 2, name: "Список слов", link: "/words"},
 ];

 return (
  <header className={styles["site-header"]}>
   <div className={styles["header-inner"]}>
    <Link to="/" className={styles["brand-link"]}>
     <h1 className={styles.logo}>
      Card<span className={styles["logo-accent"]}>Forge</span>
     </h1>
     <p className={styles.tagline}>Учите слова - расширяйте словарный запас</p>
    </Link>

    <nav className={styles["site-nav"]}>
     {headerButtons.map((button) => (
      <Link
       key={button.id}
       to={button.link}
       onClick={() => setActive(button.id)}
       className={active === button.id ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]}
      >
       {button.name}
      </Link>
     ))}
    </nav>
   </div>
  </header>
 );
};

export default Header;
