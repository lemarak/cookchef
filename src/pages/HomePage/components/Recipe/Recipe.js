import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ApiContext } from "../../../../context/ApiContext";

import styles from "./Recipe.module.scss";

const Recipe = ({
  recipe: { _id, title, image, liked },
  toggleLikeRecipe,
  deleteRecipe,
}) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const BASE_URL_API = useContext(ApiContext);

  const handleClickLike = async () => {
    try {
      setIsloading(true);
      setError(null);
      const res = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          liked: !liked,
        }),
      });
      if (res.ok) {
        const updatedRecipe = await res.json();
        toggleLikeRecipe(updatedRecipe);
      } else {
        setError("Ooops !!! Il y a une erreur...");
      }
    } catch (error) {
      setError("Ooops !!! Il y a une erreur...");
    } finally {
      setIsloading(false);
    }
  };

  const handleClickDelete = async (e) => {
    e.stopPropagation();
    try {
      const res = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        deleteRecipe(_id);
      } else {
        console.log("Suppression impossible");
      }
    } catch (error) {
      console.log("Suppression impossible");
    }
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
