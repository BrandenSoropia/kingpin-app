import reducer, { setName, initialState } from "../Profile.slice";

/**
 * Since this is simple state management, going to leave it with just these 2 tests for now...
 * Just wanted to practice testing Redux!
 */
describe("Profile Redux State Tests", () => {
  describe("Action Tests", () => {
    it("should return an action to set name", () => {
      expect(setName("Brock")).toEqual({
        type: "profile/setName",
        payload: {
          name: "Brock",
        },
      });
    });
  });

  describe("Reducer Tests", () => {
    it("should handle set name", () => {
      expect(reducer(initialState, setName("Brock"))).toEqual({
        ...initialState,
        name: "Brock",
      });
    });
  });
});
