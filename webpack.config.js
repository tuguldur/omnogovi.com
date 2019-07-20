function getStyleUse(bundleFilename) {
  return [
    {
      loader: "file-loader",
      options: {
        name: bundleFilename
      }
    },
    { loader: "extract-loader" },
    { loader: "css-loader" },
    {
      loader: "sass-loader",
      options: {
        includePaths: ["./node_modules"],
        implementation: require("dart-sass"),
        fiber: require("fibers")
      }
    }
  ];
}

module.exports = [
  {
    entry: "./src/scss/index.scss",
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: "bundle.min.js"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: getStyleUse("bundle.min.css")
        }
      ]
    }
  },

  {
    entry: "./src/js/index.js",
    output: {
      filename: "bundle.min.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: { presets: ["env"] }
        }
      ]
    }
  }
];
