import { useState } from "react";

import Homepage from "./pages/HomePage/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin/Admin";

import styles from "./App.module.scss";
// import seedRecipes from "./data/seed";

// seedRecipes();

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      {page === "homepage" && <Homepage />}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default App;
