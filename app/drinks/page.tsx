import React from "react";
import DrinkList from "./DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch drinks ");
  }
  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinkList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
