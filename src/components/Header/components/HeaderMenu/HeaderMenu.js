import styles from "./HeaderMenu.module.scss";

const HeaderMenu = ({ setPage }) => {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li onClick={() => setPage("admin")}>Nouvelle recette</li>
      <li>Souhaits</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenu;
