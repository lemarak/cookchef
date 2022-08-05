import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.scss";

const Search = ({ setFilter }) => {
  const handleInputSearch = (e) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  return (
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
  );
};

export default Search;
