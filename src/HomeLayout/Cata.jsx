import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/public/categories.json").then((response) =>
  response.json()
);

const Cata = () => {
  //console.log(categoryPromise)
  const catagories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold"> All Caragories ({catagories.length})</h2>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {catagories.map((catagories) => (
          <NavLink key={catagories.id} className={"btn bg-base-100 border-0 font-semibold text-gray-600 hover:bg-base-200"} to={`/catagory/${catagories.id}`} >{catagories.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cata;
