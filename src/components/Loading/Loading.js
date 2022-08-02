import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center flex-fill">
      <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
    </div>
  );
};

export default Loading;
