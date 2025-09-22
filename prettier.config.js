/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // this needs to be last
  ],
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  importOrder: [
    "^(node:.*)$",
    "^@core/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@server/(.*)$",
    "^@ui/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  tailwindStylesheet: "./src/globals.css",
};
