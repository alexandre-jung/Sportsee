import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    target: 'esnext',
  },
  test: {
    globals: true,
  },
};
