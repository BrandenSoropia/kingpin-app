import {
  selectSkateFinder,
  selectSkateparks,
  selectSelectedSkateparkId,
  selectSelectedSkatepark,
} from "../selectors";
import {
  mockSelectedSkateparkId,
  mockFormattedSkateparksState,
  mockAppState,
} from "../__mocks__/mock-state";

describe("Skate Finder Selectors Tests", () => {
  it("select skate finder", () => {
    expect(selectSkateFinder(mockAppState)).toEqual({
      skateparks: mockFormattedSkateparksState,
      selectedSkateparkId: mockSelectedSkateparkId,
    });
  });

  it("select skateparks", () => {
    expect(selectSkateparks(mockAppState)).toEqual(
      mockFormattedSkateparksState
    );
  });

  it("select selected skatepark id", () => {
    expect(selectSelectedSkateparkId(mockAppState)).toEqual(
      mockSelectedSkateparkId
    );
  });

  it("select selected skatepark", () => {
    expect(selectSelectedSkatepark(mockAppState)).toEqual(
      mockFormattedSkateparksState[mockSelectedSkateparkId]
    );
  });
});
