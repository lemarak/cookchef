import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}
    >
      <p>Copyright © 2022 Cookchef Stéphane, Inc.</p>
    </footer>
  );
};

export default Footer;
