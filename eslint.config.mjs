import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import _import from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    ".git",
    ".vscode",
    ".firebase",
    "**/.next",
    "**/build",
    "**/config",
    "**/node_modules",
    "**/__generated__",
    "**/public",
    "**/deprecate_front",
]), {
    extends: fixupConfigRules(compat.extends(
        "next",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "next/core-web-vitals",
        "plugin:prettier/recommended",
    )),

    plugins: {
        react: fixupPluginRules(react),
        prettier: fixupPluginRules(prettier),
        "simple-import-sort": simpleImportSort,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "prettier/prettier": ["error"],
        "no-bitwise": 0,
        "@typescript-eslint/ban-ts-comment": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "no-debugger": "warn",
        "react/jsx-handler-names": "error",

        "react/jsx-curly-brace-presence": ["error", {
            props: "never",
            children: "never",
        }],

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
    },
}, {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mts"],

    rules: {
        "simple-import-sort/imports": ["error", {
            groups: [
                ["^react", "^@?\\w"],
                ["^\\u0000"],
                ["^(@)(/.*|$)"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ],
        }],
    },
}, {
    files: ["**/*.js"],

    rules: {
        "@typescript-eslint/no-var-requires": "off",
    },
}]);
