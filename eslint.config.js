// eslint.config.js

import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').FlatConfig[]} */
export default [
  // Next.js base config
  next('core-web-vitals'),
  // Prettier config
  prettier,
  // Your custom rules
  {
    rules: {
      // Paste your rules here, without JS comments
      eqeqeq: "error",
      "no-floating-decimal": "error",
      "no-global-assign": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-magic-numbers": [
        "warn",
        {
          "ignore": [0, 1, -1],
          "ignoreArrayIndexes": true,
          "enforceConst": true,
          "detectObjects": false
        }
      ],
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-proto": "error",
      "no-return-assign": ["error", "always"],
      "no-script-url": "error",
      "no-self-assign": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "error",
      "no-unused-expressions": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-warning-comments": [
        "warn",
        {
          "terms": ["todo", "fixme"],
          "location": "start"
        }
      ],
      curly: "error",
      "dot-notation": "error",
      yoda: "error",

      // Hooks best practices
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Possible errors
      "no-console": [
        "warn",
        {
          "allow": ["warn", "error"]
        }
      ],
      "no-debugger": "error",
      "no-dupe-keys": "error",
      "no-template-curly-in-string": "error",

      // Style issues
      "block-spacing": ["error", "always"],
      "brace-style": ["error", "1tbs"],
      camelcase: ["error", { properties: "always" }],
      "comma-dangle": ["error", "never"],
      "comma-spacing": ["error", { before: false, after: true }],
      "comma-style": ["error", "last"],
      "consistent-this": ["error", "that"],
      "eol-last": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "func-name-matching": "error",
      "func-names": ["warn", "as-needed"],
      "function-paren-newline": ["error", "consistent"],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "max-depth": ["error", 4],
      "max-lines": ["warn", 300],
      "max-params": ["error", 3],
      "max-statements": ["warn", 10],
      "max-statements-per-line": ["error", { max: 1 }],
      "new-cap": ["error", { newIsCap: true, capIsNew: false }],
      "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
      "no-array-constructor": "error",
      "no-inline-comments": "error",
      "no-lonely-if": "error",
      "no-mixed-operators": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "no-trailing-spaces": "error",
      "no-underscore-dangle": "error",
      "no-unneeded-ternary": "error",
      "no-whitespace-before-property": "error",
      "object-curly-spacing": ["error", "always"],
      "one-var": ["error", "never"],
      "operator-assignment": ["error", "always"],
      "padded-blocks": ["error", "never"],
      "quote-props": ["error", "as-needed"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      semi: ["error", "always"],
      "semi-spacing": ["error", { before: false, after: true }],
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "never",
          named: "never",
          asyncArrow: "always"
        }
      ],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": ["error", { words: true, nonwords: false }],
      "spaced-comment": [
        "error",
        "always",
        {
          block: { balanced: true }
        }
      ]
    }
  }
];
