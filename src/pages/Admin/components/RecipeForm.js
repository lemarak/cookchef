import styles from "./RecipeForm.module.scss";

const RecipeForm = () => {
  return (
    <form className={`d-flex flex-column card p-20 ${styles.recipeForm}`}>
      <h2 className="mb-20">Ajouter une recette</h2>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="title">Titre de la recette</label>
        <input type="text" id="title" />
        {/* <p className="form-error">Error</p> */}
      </div>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="image">Image de la recette</label>
        <input type="text" id="image" />
        {/* <p className="form-error">Error</p> */}
      </div>
      <div>
        <button className="btn btn-primary">Sauvegarder</button>
      </div>
    </form>
  );
};

export default RecipeForm;
