import axios from "axios";

const RECIPE_API = "https://restapi.fr/api/recipes";

export const getRecipes = async (queryParam) => {
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

export const getRecipe = async (id) => {};
export const deleteRecipe = async (id) => {};
export const updateRecipe = async (updatedRecipe) => {};
export const createRecipe = async (newRecipe) => {};
