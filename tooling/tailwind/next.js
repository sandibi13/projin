import { config as baseConfig } from "./base.js";

/** @type {import("tailwindcss").Config} */
export const config = {
  presets: [baseConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};
