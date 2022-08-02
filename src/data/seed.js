import { data } from "./recipe";

const seedRecipes = async () => {
  await fetch("https://restapi.fr/api/recipes", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default seedRecipes;
