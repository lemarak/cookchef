import Homepage from "./pages/HomePage/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import styles from "./App.module.scss";
// import seedRecipes from "./data/seed";

// seedRecipes();

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
