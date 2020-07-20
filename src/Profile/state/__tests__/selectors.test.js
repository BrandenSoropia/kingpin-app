import {
  selectProfile,
  selectName,
  selectProfilePicture,
  selectTagline,
  selectSocialMediaHandle,
  selectHomeSkatepark,
} from "../selectors";
import { mockProfileAppState } from "../../__mocks__";

describe("Profile Page Selectors Tests", () => {
  it("should select profile from app state", () => {
    expect(selectProfile(mockProfileAppState)).toEqual(
      mockProfileAppState.profile
    );
  });

  it("should select name from profile state", () => {
    expect(selectName(mockProfileAppState)).toEqual(
      mockProfileAppState.profile.name
    );
  });

  it("should select profile picture from profile state", () => {
    expect(selectProfilePicture(mockProfileAppState)).toEqual(
      mockProfileAppState.profile.profilePicture
    );
  });

  it("should select tagline from profile state", () => {
    expect(selectTagline(mockProfileAppState)).toEqual(
      mockProfileAppState.profile.tagline
    );
  });

  it("should select social media handle from profile state", () => {
    expect(selectSocialMediaHandle(mockProfileAppState)).toEqual(
      mockProfileAppState.profile.socialMediaHandle
    );
  });

  it("should select home skatepark from profile state", () => {
    expect(selectHomeSkatepark(mockProfileAppState)).toEqual(
      mockProfileAppState.profile.homeSkatepark
    );
  });
});
