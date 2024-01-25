/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
