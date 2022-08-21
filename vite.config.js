import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  envDir: "./env",
  build: {
    target: "esnext",
  },
  test: {
    globals: true,
  },
};
