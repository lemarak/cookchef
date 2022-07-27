import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { data } from "../data/recipe";
import { useState } from "react";

const Content = () => {
  const recipes = data;
  const [filter, setFilter] = useState("");

  const handleInputSearch = (e) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`${styles.contentCard} card p-20 d-flex flex-column`}>
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
        <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLowerCase().includes(filter))
            .map((r) => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
