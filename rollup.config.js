import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "umd",
    name: "TableExport",
    globals: {
      xlsx: "XLSX",
    },
  },
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
  ],
  external: ["xlsx"],
};
