import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.devDependencies),
];

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true
  },
  plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  external,
};
