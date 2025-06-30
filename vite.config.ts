import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // force to use IPv4 localhost
    port: 3000, // or any other free port you prefer
  },
});
