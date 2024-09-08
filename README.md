# 🚀 Tailwind CSS Variables Plugin 🚀

### ✨ Overview

This Tailwind CSS plugin allows you to define custom CSS root variables that can be used throughout your stylesheets. It provides a way to manage and organize CSS variables efficiently using Tailwind's configuration.

### 🔨 Installation

To use this plugin, you need to install it and add it to your Tailwind CSS configuration.

#### 1. Install the plugin:

```bash
$ npm install --save-dev tailwindcss-root-variables
```

#### 2. Add the plugin to your Tailwind CSS configuration:

##### For JavaScript:

```javascript
// tailwind.config.js

module.exports = {
  // other configuration...
  plugins: [require("tailwindcss-root-variables")],
};
```

##### For TypeScript:

```typescript
// tailwind.config.ts

import type { Config } from "tailwindcss";
import cssRootVariables from "tailwindcss-root-variables";

const config: Config = {
  // other configuration...
  plugins: [cssRootVariables],
};

export default config;
```

### ⚙️ Configuration

You can configure the plugin in your `tailwind.config.js` file using the `rootVars` key.

#### Configuration Options

- `defaultPrefix` (optional): A default prefix for variable names.
- `useDefaultPrefixOnly` (optional): If `true`, only the default prefix will be used, and no group name will be included.
- `vars` (optional): An object defining your CSS variables.

#### Example Configuration:

```javascript
// tailwind.config.js

const customSpacing = {
  small: "4px",
  medium: "8px",
  large: "16px",
};

module.exports = {
  // other configuration...
  rootVars: {
    defaultPrefix: "my",
    useDefaultPrefixOnly: false,
    vars: {
      colors: {
        primary: "#ff5733",
        secondary: "#33ff57",
      },
      spacing: customSpacing,
    },
  },
};
```

This configuration will generate the following CSS variables:

```css
:root {
  --my-colors-primary: #ff5733;
  --my-colors-secondary: #33ff57;
  --my-spacing-small: 4px;
  --my-spacing-medium: 8px;
  --my-spacing-large: 16px;
}
```

### 💫 Usage

After configuring the plugin, you can use the generated CSS variables in your stylesheets as you normally would:

```css
.some-class {
  color: var(--my-colors-primary);
  margin: var(--my-spacing-medium);
}
```

### 📝 License

This plugin is licensed under the MIT License.

### 🤝 Contributing

If you would like to contribute to the development of this plugin, please submit a pull request or open an issue with any suggestions or bugs.
