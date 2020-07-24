import {
  reducer,
  setName,
  setProfilePicture,
  setTagline,
  setSocialMediaHandle,
  setHomeSkatepark,
  initialState,
} from "../slice";
import { mockProfilePictureURL } from "../../__mocks__";

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

    it("should return an action to set profile picture", () => {
      expect(setProfilePicture(mockProfilePictureURL)).toEqual({
        type: "profile/setProfilePicture",
        payload: {
          profilePicture: mockProfilePictureURL,
        },
      });
    });

    it("should return an action to set tagline", () => {
      expect(setTagline("Cool cat.")).toEqual({
        type: "profile/setTagline",
        payload: {
          tagline: "Cool cat.",
        },
      });
    });

    it("should return an action to set social media handle", () => {
      expect(setSocialMediaHandle("@brock_the_hustler")).toEqual({
        type: "profile/setSocialMediaHandle",
        payload: {
          socialMediaHandle: "@brock_the_hustler",
        },
      });
    });

    it("should return an action to set home skatepark", () => {
      expect(setHomeSkatepark("The Bentway")).toEqual({
        type: "profile/setHomeSkatepark",
        payload: {
          homeSkatepark: "The Bentway",
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

    it("should handle set profile picture", () => {
      expect(
        reducer(initialState, setProfilePicture(mockProfilePictureURL))
      ).toEqual({
        ...initialState,
        profilePicture: mockProfilePictureURL,
      });
    });

    it("should handle set tag line", () => {
      expect(reducer(initialState, setTagline("Cool cat."))).toEqual({
        ...initialState,
        tagline: "Cool cat.",
      });
    });

    it("should handle set social media handle", () => {
      expect(
        reducer(initialState, setSocialMediaHandle("@brock_the_hustler"))
      ).toEqual({
        ...initialState,
        socialMediaHandle: "@brock_the_hustler",
      });
    });

    it("should handle set home skatepark", () => {
      expect(reducer(initialState, setHomeSkatepark("The Bentway"))).toEqual({
        ...initialState,
        homeSkatepark: "The Bentway",
      });
    });
  });
});
