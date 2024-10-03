<h1 align="center">
  🎨 Tailwind CSS Variables Plugin 🎨
</h1>

<div align="center">
  <img src="https://img.shields.io/badge/Tailwindcss-0F172A?&logo=tailwindcss" />
  <img src="https://shields.io/badge/CSS-0F172A?logo=css3&logoColor=06B6D4" />
  <img src="https://shields.io/badge/TypeScript-0F172A?logo=TypeScript&logoColor=06B6D4" />
</div>

<br />

<p align="center">This Tailwind CSS plugin allows you to define custom CSS root variables that can be used throughout your stylesheets. It provides a way to manage and organize CSS variables efficiently using Tailwind's configuration.</p>

<div style="padding-top: 0.2em" />

## 🚀 Installation

To use this plugin, you need to install it and add it to your Tailwind CSS configuration.

#### 1. Install the plugin:

```bash
$ npm install --save-dev tailwindcss-root-variables
```

You can find the package on [npm here](https://www.npmjs.com/package/tailwindcss-root-variables).

#### 2. Add the plugin to your Tailwind CSS configuration:

```javascript
// tailwind.config.js

module.exports = {
  // other configuration...
  plugins: [require("tailwindcss-root-variables")],
};
```

## ⚙️ Configuration

You can configure the plugin in your `tailwind.config.js` file using the `rootVars` key.

### Configuration Options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>defaultPrefix</code></td>
      <td>A default prefix for variable names.</td>
      <td>Optional</td>
    </tr>
    <tr>
      <td><code>useDefaultPrefixOnly</code></td>
      <td>If <code>true</code>, only the default prefix will be used, and no group name will be included.</td>
      <td>Optional</td>
    </tr>
    <tr>
      <td><code>vars</code></td>
      <td>An object defining your CSS variables.</td>
      <td>Optional</td>
    </tr>
  </tbody>
</table>

### Example Configuration:

```javascript
// tailwind.config.js

const customSpacing = {
  small: "4px",
  medium: "8px",
  large: "16px",
};

module.exports = {
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
  // additional config...
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

### Integrating with Typescript

Use the `WithRootVarsType<Config>` type to type to seamlessly incorporate custom CSS variables into your Tailwind CSS configuration.

```typescript
// typescript.config.ts

import type { Config } from "tailwindcss";
import type { WithRootVarsType } from "tailwindcss-root-variables";

const config: WithRootVarsType<Config> = {
  rootVars: {
    defaultPrefix: "my",
    // additional config...
  },
  // additional config...
};

export default config;
```

## 💫️ Usage

After configuring the plugin, you can use the generated CSS variables in your stylesheets as you normally would:

```css
.some-class {
  color: var(--my-colors-primary);
  margin: var(--my-spacing-medium);
}
```

## 📝 License

This plugin is licensed under the [MIT License](#https://github.com/ealexandros/tailwindcss-root-variables/blob/main/LICENSE).

## 🤝 Contributing

If you would like to contribute to the development of this plugin, please submit a pull request or open an issue with any suggestions or bugs.
