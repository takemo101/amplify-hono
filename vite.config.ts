import { fileURLToPath } from "node:url";
import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig((_z) => {
  return {
    plugins: [
      devServer({
        entry: "./src/index.tsx",
      }),
      build({
        entry: "./src/index.tsx",
        port: 3000,
        output: "index.js",
        outputDir: "./dist",
        minify: true,
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@amplify": fileURLToPath(new URL("./amplify", import.meta.url)),
        "~": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
    publicDir: false,
  };
});
