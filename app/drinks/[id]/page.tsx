import Link from "next/link";
import React from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import drinkImg from "./drink.jpg";
import Image from "next/image";

console.log(drinkImg);
const fetchDrink = async (id: number) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Error fetching a new Drink");
  }
  const data = await res.json();
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  const { id } = await params;
  const data = await fetchDrink(id);

  const title = data.drinks[0]?.strDrink;
  const imgSrc = data.drinks[0]?.strDrinkThumb;

  return (
    <div className="flex flex-col gap-10">
      <Link href={"/drinks"} className="btn btn-primary">
        Back to Drinks
      </Link>
      <Image
        width={300}
        height={300}
        src={imgSrc}
        alt={title}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
