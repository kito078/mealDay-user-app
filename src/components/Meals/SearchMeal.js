import React, { useContext, useEffect, useState } from "react";
import MealContext from "../../context/MealContext";
import { useNavigate } from "react-router-dom";

function SearchMeal() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  //console.log(text);

  const { fetchMeal } = useContext(MealContext);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetchMeal(text);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmitHandler} className="">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium  sr-only text-white"
      ></label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {/* <svg
            class="w-5 h-5 ml-4  text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg> */}
        </div>

        <div>
          <input
            onChange={onChangeHandler}
            value={text}
            type="search"
            id="default-search"
            class="w-72 sm:w-96 p-5 pl-12 text-sm  border 
             rounded-[30px]  
             bg-gray-700 border-gray-600
            placeholder-gray-400 text-white focus:outline-none 
            focus:ring-blue-500 "
            placeholder="Search Meals..."
            required
          />
        </div>

        <button
          type="submit"
          class="hidden text-white absolute right-2.5 bottom-2.5    font-medium rounded-lg text-sm px-4 py-2 bg-sky-600 hover:bg-sky-700 focus:ring-sky-800"
        >
          go
        </button>
      </div>
    </form>
  );
}

export default SearchMeal;
