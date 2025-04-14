import { updateTimes } from "./Main";
import { fetchAPI } from "./api";

jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
}));

describe("updateTimes", () => {
  it("should update times when the date is changed", () => {
    // Set up mock return value
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

    const action = { type: "UPDATE_DATE", payload: "2025-04-15" };
    const newState = updateTimes([], action); // Call the reducer function

    expect(fetchAPI).toHaveBeenCalledWith(new Date(action.payload)); // Check if fetchAPI is called with correct date
    expect(newState).toEqual(["17:00", "18:00", "19:00"]); // Assert that the returned state is correct
  });
});
