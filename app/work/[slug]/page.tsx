import { notFound } from "next/navigation";
import { workBySlug, workItems } from "../../work-data";

const bookingUrl = "https://calendly.com/zssong601/15min";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = workBySlug(slug);
  if (!item) notFound();

  return <main className="inner-page">
    <header className="site-header"><a className="wordmark" href="/" aria-label="Song Zhang home">SONG <span>ZHANG</span></a><nav aria-label="Primary navigation"><a href="/work">Work</a><a href="/#insights">Insights</a><a href="/#research">Research</a><a href="/#about">About</a><a href="/#advisory">Advisory</a></nav><a className="header-cta" href="/#advisory">Start here <span>↗</span></a></header>
    <article className="case-study">
      <section className="case-hero section-shell"><a className="back-link" href="/work">← All work</a><p className="eyebrow">{item.eyebrow}</p><span className="case-number">{item.number}</span><h1>{item.title}</h1><p className="case-subtitle">{item.subtitle}</p><p className="case-lede">{item.lead}</p></section>
      {item.slug === "automated-instrument-data-analysis" && <figure className="case-figure section-shell"><img src="/assets/automated-instrument-data-analysis-workflow.png" alt="Workflow from raw instrument output through method-specific analysis, scientist review, and an ML-ready dataset" width={2400} height={1350} /><figcaption>From raw instrument output to reviewable, ML-ready data. Method-specific automation remains visible to scientific review.</figcaption></figure>}
      {item.slug === "literature-data-extraction-curation" && <figure className="case-figure section-shell"><img src="/assets/literature-data-extraction-curation-workflow.png" alt="Workflow from scientific publications through evidence extraction, normalization, expert review, and a traceable materials dataset" width={2400} height={1350} /><figcaption>From publications and tables to structured data that remains connected to its scientific source context.</figcaption></figure>}
      {item.slug === "machine-learning-pipelines" && <figure className="case-figure section-shell"><img src="/assets/machine-learning-pipelines-workflow.png" alt="Workflow from materials datasets through prediction questions, feature engineering, model validation, and testable hypotheses" width={2400} height={1350} /><figcaption>From materials data to validated predictions—using models to frame useful, testable scientific questions.</figcaption></figure>}
      {item.slug === "active-learning-experimental-design" && <figure className="case-figure section-shell"><img src="/assets/active-learning-experimental-design-workflow.png" alt="Closed-loop workflow from experimental data through uncertainty-aware experiment selection to new measured results" width={2400} height={1350} /><figcaption>Each new result improves the next experimental decision—balancing potential value with scientific and practical constraints.</figcaption></figure>}
      <section className="case-flow section-shell"><p className="eyebrow">WORKFLOW</p><div>{item.steps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h2>{step.title}</h2><p>{step.body}</p></article>)}</div></section>
      <section className="case-evidence section-shell"><div><p className="eyebrow">EXAMPLES</p><h2>What this work makes possible.</h2></div><ul>{item.examples.map((example) => <li key={example}>{example}</li>)}</ul></section>
      <section className="case-close section-shell"><p className="eyebrow">ADVISORY</p><h2>Interested in building a related workflow?</h2><p>Start with a free 15-minute Google Meet fit call.</p><a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Book a fit call <span>→</span></a></section>
    </article>
    <footer><span>© {new Date().getFullYear()} Song Zhang</span><span>FORMULATION DEVELOPMENT × MATERIALS AI</span><a href="/">Home ↑</a></footer>
  </main>;
}
