# Cool Things I Learned

I wanted to keep track of some of the things I found interesting/frustrating etc with React Native and mobile development. Here's a dump of it all!

## `<Image>`

- its `source` prop is used to show local or remote images.

  For local images, you just require it in: `<Image source={require('some/file')} />`

  For remote, you need to pass `source` an object in the following formate: `{ uri: "www.some-uri.com/image/destination" }`.

## Accessing a Mobile Devices's Native Images

Seems you need to get permission from the device before accessing it! Luckily `expo-image-picker` has a help to set that up

## Action Sheets

It looks like for Expo's image picker, it doesn't come with an action sheet to provide options to take a picture or use one from their gallery. Kind of annoying since Community's does come with this. So I'll be forced to use [Expo's Action Sheet](https://github.com/expo/react-native-action-sheet).

I guess it's normal to add all these libraries to really maximize React Native's mobile capabilities?

## `<Text>`

It supports adding line breaks if `\n` is present!

## Styling Gotcha's

`styled-components`

- Since React Native doesn't use units, it's works a little weirdly with `styled-components`. Imagine using `margin-bottom: 16;`Everything works fine and the style applies properly, but SC throws a warning saying "expected style `<margin-bottom: 16>` to contain units". This can be fixed simply by adding `px`, and a code mod exists that can help you fix this throughout your code base. How SC will handle this is still in discussion, but for me, I don't want to mix web and RN styling so I will just live with this warning.

  [SC discussion unit discussion](https://github.com/styled-components/css-to-react-native/issues/40)

  [SC code mod](https://github.com/styled-components/styled-components-native-code-mod)

- My simple solution on above, I should just use `attrs` instead of rules in the interpolation string!

RN's not using full CSS

- Looks like pseudo selectors aren't supported! You have to use JS logic to apply a style object or not, but how do I do that with `styled-components`? I guess I can pass in a prop to the styled component that will toggle on/off rules!

## React Native Debugger

- Nice all in one suite for Redux, React and other dev tools
- Maybe just me, but console tab is slow and unresponsive for a few seconds
- Can't seem to find the styling tab when inspecting elements! It's a little annoying but I've been getting around it by closing the RN debugger and just using the in-app inspector!
