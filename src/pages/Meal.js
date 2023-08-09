import React, { useEffect } from "react";
import { useContext } from "react";
import MealContext from "../context/MealContext";
import { useParams } from "react-router-dom";
import MealDetail from "../components/Meals/MealDetail";

function Meal() {
  const { meal, getMeal } = useContext(MealContext);

  const params = useParams();

  useEffect(() => {
    getMeal(params.idMeal);
  }, []);

  console.log(meal);
  return (
    <div>
      {meal.map((item) => (
        <MealDetail item={item} />
      ))}
    </div>
  );
}

export default Meal;
