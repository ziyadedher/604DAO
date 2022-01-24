/* eslint-disable import/no-commonjs -- exception for configuration files. */
/* eslint-disable import/unambiguous -- exception for configuration files. */

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
    "./tests/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line node/global-require, @typescript-eslint/no-require-imports -- exception for configuration files.
    require("@tailwindcss/typography"),
  ],
};
