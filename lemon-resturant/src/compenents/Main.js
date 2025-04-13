import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api"; // adjust path if needed

// Reducer for managing availableTimes
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return fetchAPI(action.payload); // fetchAPI returns available times
    default:
      return state;
  }
};

const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return fetchAPI(today); // initial times for today
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const navigate = useNavigate();

  // Called when the form is submitted
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed", { state: formData }); // pass data to confirmation page
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;
