import { reducer, initialState, setTricks, setSelectedTrickId } from "../slice";
import {
  mockFormattedTricks,
  mockSelectedTrick,
} from "../__mocks__/mock-state";

describe("Trick Tracker State Tests", () => {
  describe("Action Creator Tests", () => {
    it("should create an action for set tricks", () => {
      expect(setTricks(mockFormattedTricks)).toEqual({
        type: "trickTracker/setTricks",
        payload: { tricks: mockFormattedTricks },
      });
    });

    it("should create an action for set selected trick id", () => {
      expect(setSelectedTrickId(mockSelectedTrick.id)).toEqual({
        type: "trickTracker/setSelectedTrickId",
        payload: {
          selectedTrickId: mockSelectedTrick.id,
        },
      });
    });
  });

  describe("Reducer Tests", () => {
    it("should handle set tricks", () => {
      expect(reducer(initialState, setTricks(mockFormattedTricks))).toEqual({
        ...initialState,
        tricks: mockFormattedTricks,
      });
    });

    it("should handle set selected trick id", () => {
      expect(
        reducer(initialState, setSelectedTrickId(mockSelectedTrick.id))
      ).toEqual({
        ...initialState,
        selectedTrickId: mockSelectedTrick.id,
      });
    });
  });
});
