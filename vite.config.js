import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
base: "/PT-Communications-And-Technology-/" // must match your repo name exactly
});
