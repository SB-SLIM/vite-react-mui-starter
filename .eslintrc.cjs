module.exports = {
  root: true,
  // files: ["**/*.js"],
  // ignores: ["**/*.test.js", "**/*.config.js"],
  env: {
    es6: true,
    node: true,
  },
  // languageOptions: {
  //   parser: "@babel/eslint-parser",
  //   parserOptions: {
  //     requireConfigFile: false,
  //     babelOptions: {
  //       babelrc: false,
  //       configFile: false,
  //       presets: ["@babel/preset-react"],
  //     },
  //   },
  // },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["warn", {}, { usePrettierrc: true }], // Use .prettierrc file as source
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/state-in-constructor": "off",
    "import/namespace": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/no-duplicates": "off",
    "import/no-named-as-default": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/order": "off",
  },
};
