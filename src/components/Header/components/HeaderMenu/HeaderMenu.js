import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li>
        <NavLink to="/admin"> Nouvelle recette</NavLink>
      </li>
      <li>Souhaits</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenu;
