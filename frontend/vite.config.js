import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ← ここを `./` ではなく `/` に変更！
  build: {
    outDir: "dist", // ← Vercel がデフォルトで認識するフォルダ
  },
});
