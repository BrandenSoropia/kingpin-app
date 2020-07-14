# kingpin-app

Skateboarding app to find parks and other skaters in Toronto. Let others know what you're working on and where to find you online!

Follow development progress on here: https://trello.com/b/dXjchpEa/skateboarding-app

# Local Setup

Requirements:

- Node `v12.13.1`. Use [nvm](https://github.com/nvm-sh/nvm) to help easily manage your Node versions!
- Yarn Classic `v.1.22.0`. [Get it from here](https://github.com/nvm-sh/nvm)
- Expo `3.22.1`. If it's your first time using Expo, its installation (including dependency installation for mobile simulators) are included in their [Getting Started Docs](https://docs.expo.io/get-started/installation/).
  > Note: Mac users will need to get `watchman` as well! It's mentioned in the docs!
- If you want to test the app directly on your phone, get the Expo Client app installed on your device! Find it on [iOS](https://apps.apple.com/ca/app/expo-client/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA).

Once all of the above is setup and installed:

1. Clone this repo and navigate to it.
2. Run `expo start` or `yarn start`. This will open a browser with a helpful Expo dashboard to monitor and run simulators of the app.
3. On the left side control panel, choose your mobile simulator or open up your phone's QR scanner to see the app in action!

# Debugging

You'll need to React Devtools standalone. You can get the [full setup docs here](https://reactnative.dev/docs/debugging#react-developer-tools).

1. Install React Devtools by running `npm install -g react-devtools`.
2. Make sure you have a simulator running. I'll be using iOS primarily.
3. Run `react-devtools`. The Dev Tools window should open and prompt you to open the in-app dev menu. On iOS that is done with `Command + Control + Z`.
4. In the simulator's in-app dev menu, click "Debug Remote JS". You might have to toggle it off then on again to actually get it to work!

# Other Helpful Dev Notes

- Absolute imports are setup via `babel-plugin-module-resolver`. You can find and edit its configuration in `babel.config.js`
