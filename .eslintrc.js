module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  // add your custom rules here
  rules: {
    "vue/html-self-closing": "off", // imgタグのようにタグが１つで完結してもOK
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "ignore", // aタグの羅列などで変な風にならないように追記
      },
    ],
  },
};
