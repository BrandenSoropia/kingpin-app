# kingpin-app

Skateboarding app to find parks and other skaters in Toronto. Let others know what you're working on and where to find you online!

Follow development progress on here: https://trello.com/b/dXjchpEa/skateboarding-app

# Local Setup

Requirements:

- Node `v12.13.1`. Use [nvm](https://github.com/nvm-sh/nvm) to help easily manage your Node versions!
- Yarn Classic `v1.22.0`. [Get it from here](https://github.com/nvm-sh/nvm)
- Expo CLI `v3.22.1+`. If it's your first time using Expo, its installation (including dependency installation for mobile simulators) are included in their [Getting Started Docs](https://docs.expo.io/get-started/installation/).
  > Note: Mac users will need to get `watchman` as well! It's mentioned in the docs!
- If you want to test the app directly on your phone, get the Expo Client app installed on your device! Find it on [iOS](https://apps.apple.com/ca/app/expo-client/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA).

Once all of the above is setup and installed:

1. Clone this repo and navigate to it.
2. Run `yarn start`. This will open a browser with a helpful Expo dashboard to monitor and run simulators of the app.
3. On the left side control panel, choose your mobile simulator or open up your phone's QR scanner to see the app in action!

## Storybook Development

This app also includes Storybook which is viewable in app! (Note to self: Hide Storybook in production and make sure storybook code is removed from production if it's included!)
The process for Storybook + React Native is a little tedious where you need to require each story directly and reload the app... To help streamline that a bit, storybook reloader is included. Here's the steps to add and view these new stories:

> Note: Storybook + React Native only supports old storybook format. [Read more about this at the bottom the the "Basic Story" Section here.](https://storybook.js.org/docs/basics/writing-stories/#loading-stories)

1. Add a story anywhere within `./src`. It must end in `*.stories.js`, like `Details.stories.js`.
2. Run `yarn loadstories`. This will auto-generate all paths to all stories anywhere within `./src`.
3. Have your app running in simulator or on device and refresh/reload it (`Command + R` on iOS simulator, or via pressing "Reload" in the in-app dev menu). You should now see the new stories!

# Debugging

You'll need to React Native Debugger standalone configured to Expo, you can [read official docs here](https://docs.expo.io/workflow/debugging/#react-native-debugger). It's neat because if comes with React Dev Tools and Redux Dev Tools!

1. Install React Native Debugger by running `brew update && brew cask install react-native-debugger`.
2. Run app in simulator.
3. Open in-app dev menu and tap "Debug Remote JS". React Native Debugger should open up on it's own and be connected to the app!

If for some reason the Debugger is not opening/not connecting, kill the simulator and Expo processes. Try clearing watchmen with `watchman watch-del-all` and restart Expo with `yarn start -c`. Re-try steps 1-3 and it should be working!

# Testing

To run and watch all tests, you can run `yarn test`.
To do the same with debug on, run `yarn testdebug`.

# Other Helpful Dev Notes

- Absolute imports are setup via `babel-plugin-module-resolver`. You can find and edit its configuration in `babel.config.js`
- To fully clean Expo + watchman, kill Expo then run `watchman watch-del-all`. Then restart Expo by running `yarn start -c`. [Source](https://github.com/facebook/react-native/issues/26687#issuecomment-537504575)
