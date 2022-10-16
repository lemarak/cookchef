import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <img src={cookchef} alt="logo cookchef" />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="/admin">
          <button className="mr-15 btn btn-reverse-primary">
            {/* <FontAwesomeIcon icon={faHeart} className="mr-5" /> */}
            <span>nouvelle recette</span>
          </button>
        </NavLink>
        <NavLink to="/">
          <button className="mr-15 btn btn-reverse-primary">
            <FontAwesomeIcon icon={faHeart} className="mr-5" />
            <span>souhaits</span>
          </button>
        </NavLink>
        <button className="btn btn-primary">connexion</button>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowMenu(!showMenu)}
        icon={faBars}
        className={`${styles.headerXs} "mr-15"`}
      />
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
};

export default Header;
