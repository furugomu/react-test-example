module.exports = (api) => {
  if (api.env("test")) {
    return {
      presets: [
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
      ],
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    };
  }
  return { presets: ["next/babel"] };
};
