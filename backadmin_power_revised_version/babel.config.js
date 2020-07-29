module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "~src/style/theme/lib/"
      }
    ]
  ],
  sourceType: "unambiguous"
};
