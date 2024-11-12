import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinkList = ({ drinks }) => {
  return (
    <ul className="gap-6 mt-6 grid sm:grid-cols-2">
      {drinks.map((drink) => (
        <li key={drink.strDrink}>
          <Link
            key={drink.strDrink}
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4 ">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;

// const DrinkList = ({ drinks }) => {
//   return (
//     <ul className="menu menu-vertical pl-0">
//       {drinks.map((drink) => (
//         <li key={drink.strDrink}>
//           <Link
//             key={drink.strDrink}
//             href={`/drinks/${drink.idDrink}`}
//             className="text-lg"
//           >
//             {drink.strDrink}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default DrinkList;
