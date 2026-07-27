import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, normalize, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const clientRoot = join(projectRoot, "dist", "client");
const outputRoot = join(projectRoot, "dist", "github-pages");
const routes = [
  "/",
  "/insights",
  "/readiness",
  "/work",
  "/work/automated-instrument-data-analysis",
  "/work/literature-data-extraction-curation",
  "/work/machine-learning-pipelines",
  "/work/active-learning-experimental-design",
];

await rm(outputRoot, { recursive: true, force: true });
await cp(clientRoot, outputRoot, { recursive: true });

const workerUrl = pathToFileURL(join(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("githubPagesExport", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const assetRoot = `${normalize(clientRoot)}\\`;
const assets = {
  async fetch(request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname).replace(/^\/+/, "");
    const filePath = resolve(clientRoot, pathname);
    if (!`${normalize(filePath)}\\`.startsWith(assetRoot) && normalize(filePath) !== normalize(clientRoot)) {
      return new Response("Not found", { status: 404 });
    }
    return new Response("Static asset available");
  },
};

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://zssong601.github.io${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: assets },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Could not render ${route}: ${response.status}`);
  const relativePath = route === "/" ? "index.html" : join(route.slice(1), "index.html");
  const destination = join(outputRoot, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, await response.text());
}

console.log(`Exported ${routes.length} pages to ${outputRoot}`);
