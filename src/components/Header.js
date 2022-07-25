import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <FontAwesomeIcon icon={faBars} className="mr-15" />
      <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <FontAwesomeIcon icon={faBasketShopping} className="mr-5" />
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
};

export default Header;
