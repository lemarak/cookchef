import { useContext, useEffect, useState } from "react";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const BASE_URL_API = useContext(ApiContext);
  const LIMIT = 6;

  useEffect(() => {
    let cancel = false;
    const fetchRecipes = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const skip = (page - 1) * LIMIT;
        const res = await fetch(`${BASE_URL_API}?skip=${skip}&limit=${LIMIT}`);
        if (res.ok && !cancel) {
          const newRecipes = await res.json();
          setRecipes((r) =>
            Array.isArray(newRecipes) ? [...r, ...newRecipes] : [newRecipes]
          );
        } else if (!cancel) {
          setError("Ooops, erreur res.ok !!!");
        }
      } catch (error) {
        setError("Ooops, erreur catch!!!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipes();
    return () => (cancel = true);
  }, [BASE_URL_API, page]);

  const handleInputSearch = (e) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
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
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-15" />
          <input
            onInput={handleInputSearch}
            className="flex-fill"
            type="text"
            name=""
            placeholder="Rechercher"
          />
        </div>
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
