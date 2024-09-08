import plugin from "tailwindcss/plugin";

const CONFIG_SECTION_NAME = "rootVars";

export type RootVarsType = {
  defaultPrefix?: string;
  useDefaultPrefixOnly?: boolean;
  vars?: Record<string, Record<string, string>>;
};

const buildVariableName = (
  defaultPrefix: string,
  groupName: string,
  propertyName: string,
  useDefaultPrefixOnly: boolean,
): string => {
  const prefix = defaultPrefix ? `${defaultPrefix}` : "";

  if (useDefaultPrefixOnly) {
    return `--${prefix}${prefix && "-"}${propertyName}`;
  }

  return `--${prefix}${prefix && "-"}${groupName}-${propertyName}`;
};

const cssRootVariablesPlugin = plugin(({ addComponents, config }) => {
  const rootVarsConfig: RootVarsType = config(CONFIG_SECTION_NAME) || {};

  const {
    defaultPrefix = "",
    useDefaultPrefixOnly = false,
    vars = {},
  } = rootVarsConfig;

  const rootVariables: Record<string, string> = {};

  Object.entries(vars).forEach(([groupName, propertyMap]) => {
    Object.entries(propertyMap).forEach(([propertyName, propertyValue]) => {
      const variableName = buildVariableName(
        defaultPrefix,
        groupName,
        propertyName,
        useDefaultPrefixOnly,
      );

      rootVariables[variableName] = propertyValue;
    });
  });

  addComponents({
    ":root": rootVariables,
  });
});

export default cssRootVariablesPlugin;
