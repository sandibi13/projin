/** @type {import("lint-staged").Config} */
const config = {
  "*": ["pnpm lint", "pnpm format"],
};

export default config;
