/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@acme/tailwind-config")],
  content: [
    "../../packages/ui/components/**/*.{js,ts,svelte}",
    "./src/routes/**/*.{js,ts,svelte}",
    "./src/components/**/*.{js,ts,svelte}",
  ],
};
