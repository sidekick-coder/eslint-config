import globals from 'globals'
import pluginJs from '@eslint/js'
import typescriptEslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintTailwind from 'eslint-plugin-tailwindcss'

export const js = {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [
        pluginJs.configs.recommended,
    ],
}

export const ts = {
    files: ['**/*.{ts,mts,cts}'],
    extends: [
        typescriptEslint.configs.recommended,
    ],
}

export const vue = {
    files: ['**/*.vue'],
    extends: [
        pluginJs.configs.recommended,
        ...typescriptEslint.configs.recommended,
        ...eslintPluginVue.configs['flat/recommended'],
    ],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: globals.browser,
        parserOptions: {
            parser: typescriptEslint.parser,
        },
    },
}

export const tailwind = {
    files: ['**/*.{css,scss,sass,vue,html}'],
    extends: [
        ...eslintTailwind.configs['flat/recommended'],
    ],
}

export const prettier = {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue,css,scss,sass,html}'],
    ...eslintPluginPrettierRecommended,
}

export const rules = {
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
}

export const all = typescriptEslint.config(
    js,
    ts,
    vue,
    prettier,
    { rules }
)
