import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    {
        plugins: {
            "@stylistic": stylistic
        },
        rules: {
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/no-extra-semi": ["error"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/no-trailing-spaces": ["error"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/max-len": ["error", 120],
            "eqeqeq": ["error", "smart"],
        }
    }
);
