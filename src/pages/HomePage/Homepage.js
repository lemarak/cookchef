import { useContext, useState } from "react";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import Search from "./components/Search/Search";
import { useFetchData } from "../../hooks";

const Homepage = () => {
  // const [recipes, setRecipes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const BASE_URL_API = useContext(ApiContext);

  const [[recipes, setRecipes], isLoading, error] = useFetchData(
    BASE_URL_API,
    page
  );

  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
  };
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((r) => r._id !== id));
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
                  toggleLikeRecipe={updateRecipe}
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
