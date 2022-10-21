import axios from "axios";

const RECIPE_API = "https://restapi.fr/api/recipes";

export const getRecipesApi = async (queryParam) => {
  try {
    const response = await axios.get(
      `${RECIPE_API}${queryParam ? `?${queryParam}` : ""}`
    );
    if (response.status === 200) {
      const data = response.data;
      return Array.isArray(data) ? data : [data];
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getRecipeApi = async (id) => {
  const response = await axios.get(`${RECIPE_API}/${id}`);
  if (response.status === 200) {
    const recipe = response.data;
    return recipe;
  } else {
    throw new Error("Error get one recipe");
  }
};

export const deleteRecipeApi = async (id) => {
  const res = await axios.delete(`${RECIPE_API}/${id}`);
  if (res.status === 200) {
    return id;
  } else {
    throw new Error("Error delete recipe");
  }
};

export const updateRecipeApi = async (updatedRecipe) => {
  const { _id, ...restRecipe } = updatedRecipe;
  const res = await axios.put(`${RECIPE_API}/${_id}`, {
    ...restRecipe,
  });
  if (res.status === 200) {
    const recipe = res.data;
    return recipe;
  } else {
    throw new Error("Error update recipe");
  }
};

export const createRecipeApi = async (values) => {
  const response = await axios.post(RECIPE_API, {
    title: values.title,
    image: values.image,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Error create recipe");
  }
};
