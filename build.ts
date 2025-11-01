import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import { build } from "esbuild";

async function buildServer() {
  // .amplify-hosting/compute/default ディレクトリを作成
  const computeDir = join(process.cwd(), "dist");
  await mkdir(computeDir, { recursive: true });

  // esbuildでバンドル
  console.log("Bundling with esbuild...");
  await build({
    entryPoints: ["src/server.ts"],
    bundle: true,
    platform: "node",
    target: "node20",
    format: "esm",
    outfile: join(computeDir, "index.js"),
    external: [],
    banner: {
      js: "#!/usr/bin/env node",
    },
    minify: true,
    sourcemap: false,
    logLevel: "info",
  });

  console.log(
    "Build completed! Bundled server.js is ready for Amplify Hosting.",
  );
}

buildServer().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
