import styles from "./Admin.module.scss";
import RecipeForm from "./components/RecipeForm";

const Admin = () => {
  return (
    <div className="d-flex flex-column flex-fill align-items-center p-20">
      <RecipeForm />
    </div>
  );
};

export default Admin;
