import { Suspense, useState } from "react";

import Homepage from "./pages/HomePage/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin/Admin";

import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import seedRecipes from "./data/seed";

//seedRecipes();

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
