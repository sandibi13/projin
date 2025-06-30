/** @type {import("lint-staged").Config} */
const config = {
  "*.{js,ts,tsx,jsx,json,md,mdx,yml}": ["prettier --write", "eslint --fix"],
};

export default config;
