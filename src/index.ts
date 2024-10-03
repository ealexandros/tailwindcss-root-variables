import plugin from "tailwindcss/plugin";

const CONFIG_SECTION_NAME = "rootVars";

export type WithRootVarsType<T> = RootVarsType & T;

export type RootVarsType = {
  [CONFIG_SECTION_NAME]: RootVarsProps;
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

type RootVarsProps = {
  defaultPrefix?: string;
  useDefaultPrefixOnly?: boolean;
  vars?: Record<string, Record<string, string>>;
};

const cssRootVariablesPlugin = plugin(({ addComponents, config }) => {
  const rootVarsConfig: RootVarsProps = config(CONFIG_SECTION_NAME) || {};

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
