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
