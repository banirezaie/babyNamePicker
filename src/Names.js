import React from "react";
import BabyNamesData from "./BabyNamesData.json";

const Names = () => {
  const sortNames = BabyNamesData.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div>
      <ul className="names">
        {sortNames.map((x, i) => {
          return (
            <li key={i} className={x.sex === "f" ? "female" : "male"}>
              {x.name} {console.log(x)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Names;
