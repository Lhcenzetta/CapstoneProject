import { initializeTimes, updateTimes } from "./Main";

describe("initializeTimes", () => {
  test("returns default times", () => {
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });
});

describe("updateTimes", () => {
  test("returns updated times regardless of date", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "UPDATE_DATE", payload: "2025-04-14" };
    const result = updateTimes(state, action);
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });
});
