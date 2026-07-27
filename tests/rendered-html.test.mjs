import assert from "node:assert/strict";
import test from "node:test";

async function render(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the public home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /AI-enabled materials R(?:&amp;|&)D[\s\S]*Grounded in experiments/i);
  assert.match(html, /Google Scholar/i);
  assert.match(html, /AI-readiness check/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
});

test("renders insights and readiness routes", async () => {
  const [insights, readiness] = await Promise.all([render("/insights"), render("/readiness")]);
  assert.equal(insights.status, 200);
  assert.equal(readiness.status, 200);
  const [insightsHtml, readinessHtml] = await Promise.all([insights.text(), readiness.text()]);
  assert.match(insightsHtml, /Where materials-AI data actually comes from/i);
  assert.match(readinessHtml, /Find a practical starting point/i);
  assert.match(readinessHtml, /No email, account, or data collection/i);
});
