module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "plugin:import/typescript",
  ],
  plugins: ["import", "jest", "prettier", "@typescript-eslint"],
  ignorePatterns: ["dist/", "node_modules/", ".eslintrc.js"],
  env: {
    browser: "true",
  },
  globals: {
    React: true,
    JSX: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".ts", ".jsx", ".tsx"],
    },
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "node/no-extraneous-import": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        custom: {
          match: true,
          regex: "^I[A-Z]",
        },
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    camelcase: "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "parent", "sibling", "internal"],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "builtin"],
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": "error",
    "no-use-before-define": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "never",
        next: "*",
        prev: ["case", "default"],
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["multiline-const"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
    quotes: ["error", "double"],
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/static-property-placement": "off",
    semi: ["error", "never"],
    "node/no-unsupported-features/es-syntax": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.{js,jsx,ts,tsx}", "jest.setup.ts"],
      env: {
        "jest/globals": true,
      },
      rules: {},
    },
    {
      files: ["viteBaseConfig.ts", "vite.config.ts"],
      env: {
        node: true,
      },
      rules: {
        "node/no-unpublished-import": "off",
        "sort-imports": "off",
        "no-undef": "off",
      },
    },
  ],
}
