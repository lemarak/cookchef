import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li>Souhaits</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenu;
