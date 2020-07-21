import {
  initialState,
  setSkateparks,
  setSelectedSkatepark,
  reducer,
} from "../slice";
import skateparkData from "common/data/skateparks.json";

const skateparks = skateparkData.skateparks;

const firstSkatepark = skateparks[0];

describe("Skatepark Finder state tests", () => {
  describe("Action Creator Tests", () => {
    it("should create an action for setSkateparks", () => {
      expect(setSkateparks(skateparks)).toEqual({
        type: "skateparkFinder/setSkateparks",
        payload: { skateparks },
      });
    });

    it("should create an action for setSelectedSkatepark", () => {
      expect(setSelectedSkatepark(firstSkatepark.id)).toEqual({
        type: "skateparkFinder/setSelectedSkatepark",
        payload: { skateparkId: firstSkatepark.id },
      });
    });
  });

  describe("Reducer Tests", () => {
    it("should handle setSkateparks action", () => {
      expect(reducer(initialState, setSkateparks(skateparks))).toEqual({
        ...initialState,
        skateparks,
      });
    });

    it("should handle setSelectedSkatepark action", () => {
      expect(
        reducer(initialState, setSelectedSkatepark(firstSkatepark.id))
      ).toEqual({
        ...initialState,
        selectedSkateparkId: firstSkatepark.id,
      });
    });
  });
});
