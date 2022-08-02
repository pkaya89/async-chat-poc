module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      [
        "@babel/preset-env",
        // {
        //   modules: false,
        // },
      ],
      "@babel/preset-react",
    ],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
