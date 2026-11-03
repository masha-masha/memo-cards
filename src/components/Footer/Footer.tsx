import styles from "./Footer.module.css";
const Footer = () => {
 return (
  <footer className={styles["site-footer"]}>
   <div className={styles["footer-inner"]}>
    <a href="https://code.mu">code.mu</a> &copy; 2026 CardForge
   </div>
  </footer>
 );
};

export default Footer;
