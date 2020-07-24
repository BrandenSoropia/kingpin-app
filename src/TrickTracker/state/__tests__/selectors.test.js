import {
  selectTrickTracker,
  selectTricks,
  selectSelectedTrickId,
  selectSelectedTrick,
} from "../selectors";
import {
  mockFormattedTricks,
  mockSelectedTrick,
  mockAppState,
} from "../__mocks__/mock-state";

describe("Trick Tracker Selector Tests", () => {
  it("should select trick tracker app state", () => {
    expect(selectTrickTracker(mockAppState)).toEqual({
      tricks: mockFormattedTricks,
      selectedTrickId: mockSelectedTrick.id,
    });
  });

  it("should select tricks", () => {
    expect(selectTricks(mockAppState)).toEqual(mockFormattedTricks);
  });

  it("should select selected trick id", () => {
    expect(selectSelectedTrickId(mockAppState)).toEqual(mockSelectedTrick.id);
  });

  it("should select selected trick", () => {
    expect(selectSelectedTrick(mockAppState)).toEqual(mockSelectedTrick);
  });
});
