import styles from "./Recipe.module.scss";
import recipe from "../assets/images/recette.jpg";

const Recipe = () => {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={recipe} alt="recette" />
      </div>
      <div
        className={` ${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>Saumon sur son lit de mange-tout</h3>
      </div>
    </div>
  );
};

export default Recipe;
