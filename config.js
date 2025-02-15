import globals from 'globals'
import pluginJs from '@eslint/js'
import tsEslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tailwind from 'eslint-plugin-tailwindcss'

export const config = tsEslint.config(
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended,
    ...tailwind.configs['flat/recommended'],
    ...tsEslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
            },
            globals: { ...globals.browser, ...globals.node },
        },
    },
    {
        rules: {
            'no-undef': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/no-setup-props-destructure': 'off',
            'vue/one-component-per-file': 'off',
            'vue/no-v-html': 'off',
            'vue/no-v-text-v-html-on-component': 'off',
            'vue/require-toggle-inside-transition': 'off',
            'vue/require-explicit-emits': 'off',
            'vue/html-indent': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/html-self-closing': 'off',
            'tailwindcss/no-custom-classname': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'linebreak-style': 'off',
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                    trailingComma: 'es5',
                    semi: false,
                    singleQuote: true,
                    useTabs: false,
                    quoteProps: 'consistent',
                    tabWidth: 4,
                    bracketSpacing: true,
                    arrowParens: 'always',
                    printWidth: 100,
                },
            ],
        },
    }
)
