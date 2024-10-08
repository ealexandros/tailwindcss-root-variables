import type { Config } from "tailwindcss";
import cssRootVariables, { WithRootVarsType } from "./src";

const config: WithRootVarsType<Config> = {
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
