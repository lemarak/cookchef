import styles from "./Recipe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Recipe = ({ title, image }) => {
  const [liked, setLiked] = useState(false);
  const handleClickFavorite = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={handleClickFavorite} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recette" />
      </div>
      <div
        className={` ${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <FontAwesomeIcon
          icon={faHeart}
          className={`${liked ? "text-primary" : ""}`}
        />
      </div>
    </div>
  );
};

export default Recipe;
