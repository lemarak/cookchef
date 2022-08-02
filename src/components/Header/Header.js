import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <FontAwesomeIcon icon={faHeart} className="mr-5" />
          <span>souhaits</span>
        </button>
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
