module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-styled-components",
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".json"],
          alias: {
            "ui-kit": "./src/ui-kit",
          },
        },
      ],
    ],
  };
};
