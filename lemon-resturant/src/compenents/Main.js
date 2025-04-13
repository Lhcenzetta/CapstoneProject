// Main.js
import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

const updateTimes = (state, action) => {
  // You can update this to fetch different times per date later
  if (action.type === "UPDATE_DATE") {
    const selectedDate = action.payload;
    // For now, return static times
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
export { initializeTimes, updateTimes };

