// noinspection JSUnusedGlobalSymbols

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default {
  plugins: [react(), svgr()],
  envDir: "./env",
  build: {
    target: "esnext",
  },
  test: {
    globals: true,
  },
};
