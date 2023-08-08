import { createContext, useEffect, useReducer } from "react";
import mealReducer from "./MealReducer";
import axios from "axios";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initialState = {
    meals: [],
  };

  const [state, dispatch] = useReducer(mealReducer, initialState);

  //fetch meal
  useEffect(() => {
    fetchMeal("chicken");
  }, []);

  const fetchMeal = async (text) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/search.php?s=${text}`
      );
      //setMeals(response.data.meals);
      const items = response.data.meals;
      console.log(items);
      dispatch({
        type: "GET_MEALS",
        payload: items,
      });
    } catch (error) {
      console.error("error in fetching ", error.message);
    }
  };

  return (
    <MealContext.Provider value={{ meals: state.meals, fetchMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
