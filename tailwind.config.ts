import type { Config } from "tailwindcss";
import cssRootVariables from "./src";

const config: Config = {
  content: [],
  rootVars: {
    defaultPrefix: "custom",
    useDefaultPrefixOnly: false,
    vars: {
      colors: {
        primary: "#ff5733",
        secondary: "#33ff57",
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [cssRootVariables],
};

export default config;
