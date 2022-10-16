import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./Recipe.module.scss";

const Recipe = ({ recipe, updateRecipe, deleteRecipe }) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const handleClickLike = async () => {
    updateRecipe({ ...recipe, liked: !recipe.liked });
  };

  const handleClickDelete = async (e) => {
    e.stopPropagation();
    deleteRecipe(recipe._id);
  };

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <FontAwesomeIcon
        onClick={handleClickDelete}
        icon={faXmark}
        className={styles.xmark}
      />
      {error && <span>{error}</span>}
      {isLoading && <span>Enregistrement...</span>}
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt="recette" />
      </div>
      <div
        className={` ${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{recipe.title}</h3>
        <FontAwesomeIcon
          icon={faHeart}
          className={`${recipe.liked ? "text-primary" : ""}`}
        />
      </div>
    </div>
  );
};

export default Recipe;
