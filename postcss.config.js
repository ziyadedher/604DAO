/* eslint-disable import/no-commonjs -- exception for configuration files. */
/* eslint-disable import/unambiguous -- exception for configuration files. */

// We need this file in the root for Storybook to function correctly.

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
