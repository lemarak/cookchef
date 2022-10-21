import { useState } from "react";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import Loading from "../../components/Loading/Loading";
import Search from "./components/Search/Search";
import { useFetchRecipe } from "../../hooks";
import { deleteRecipeApi, updateRecipeApi } from "../../api";

const Homepage = () => {
  // const [recipes, setRecipes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const [[recipes, setRecipes], isLoading, error] = useFetchRecipe(page);

  const updateRecipe = async (updatedRecipe) => {
    const savedRecipe = await updateRecipeApi(updatedRecipe);
    setRecipes(
      recipes.map((r) => (r._id === savedRecipe._id ? savedRecipe : r))
    );
  };

  const deleteRecipe = async (id) => {
    const deletedId = await deleteRecipeApi(id);
    setRecipes(recipes.filter((r) => r._id !== deletedId));
  };

  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">
        Découvrez nos nouvelles recettes{" "}
        <small>({recipes.length} recettes)</small>
      </h1>
      {error && <span>{error}</span>}
      <div
        className={`${styles.contentCard} card flex-fill d-flex flex-column p-20 mb-20`}
      >
        <Search setFilter={setFilter} />

        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLowerCase().includes(filter))
              .map((r) => (
                <Recipe
                  key={r._id}
                  recipe={r}
                  deleteRecipe={deleteRecipe}
                  updateRecipe={updateRecipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button onClick={() => setPage(page + 1)} className="btn btn-primary">
            Charger plus de recettes...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
