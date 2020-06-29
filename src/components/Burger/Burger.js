import React from "react";

import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredient) => {
      let temp = [];
      for (let i = 0; i < props.ingredients[ingredient]; i++) {
        temp.push(<BurgerIngredient key={ingredient + i} type={ingredient} />);
      }
      return [...temp];
    })
    .reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue);
    });

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
