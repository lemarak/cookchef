import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";

import styles from "./RecipeForm.module.scss";

const RecipeForm = () => {
  const BASE_URL_API = useContext(ApiContext);
  const defaultValues = {
    title: "",
    image: "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Le titre de la recette doit être renseigné")
      .min(5, "Le titre doit être explicite")
      .max(20, "Le titre doit être succint"),
    image: yup
      .string()
      .required("L'image est obligatoire")
      .url("L'image doit être un lien valide"),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    clearErrors,
    setError,
  } = useForm({
    defaultValues,
    resolver: yupResolver(recipeSchema),
  });

  const submit = async (values) => {
    console.log(`values :`, values);
    try {
      clearErrors();
      const response = await fetch(BASE_URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        reset(defaultValues);
      } else {
        setError("generic", { type: "generic", message: "Il y a une erreur" });
      }
    } catch (error) {
      setError("generic", { type: "generic", message: "Il y a une erreur" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}
    >
      <h2 className="mb-20">Ajouter une recette</h2>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="title">Titre de la recette</label>
        <input {...register("title")} type="text" id="title" />
        {errors?.title && <p className="form-error">{errors.title?.message}</p>}
      </div>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="image">Image de la recette</label>
        <input {...register("image")} type="text" id="image" />
        {errors?.image && <p className="form-error">{errors.image?.message}</p>}
      </div>
      <div>
        {errors?.generic && (
          <p className="form-error">{errors.generic?.message}</p>
        )}
        <button disabled={isSubmitting} className="btn btn-primary">
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
