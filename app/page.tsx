const projects = [
  { index: "01", stage: "DATA ORIGIN 01", title: "Automated Instrument Data Analysis", summary: "Turning characterization outputs into reviewable, ML-ready datasets.", note: "Illustrative case studies: optical microscopy, FT-IR, and DSC." },
  { index: "02", stage: "DATA ORIGIN 02", title: "Literature Data Extraction & Curation", summary: "Transforming published evidence into structured, traceable materials datasets.", note: "Extraction, normalization, source context, and human validation." },
  { index: "03", stage: "LEARNING SYSTEM", title: "Machine Learning Pipelines", summary: "From feature engineering to validated models and scientific interpretation.", note: "Connecting formulation, process, and characterization data." },
  { index: "04", stage: "EXPERIMENT LOOP", title: "Active Learning & Experimental Design", summary: "Using uncertainty and constraints to prioritize informative next experiments.", note: "A public, simulated demonstration of a closed-loop learning workflow." },
];

const notes = [
  ["MATERIALS INFORMATICS", "Where materials-AI data actually comes from", "A model-ready table is not the same as independent experimental evidence."],
  ["SCIENTIFIC AI", "Physics-aware features are not physics-aware machine learning", "A framework for separating useful representation from overstated claims."],
  ["AI PRACTICE", "What should remain human in an AI-assisted workflow?", "Automation can extend judgment; it should not hide responsibility."],
];

const bookingUrl = "https://calendly.com/zssong601/15min";
const scholarUrl = "https://scholar.google.com/citations?user=osQ0uCwAAAAJ&hl=zh-CN";
const linkedInUrl = "https://www.linkedin.com/in/song-zhang-stanford";
const githubUrl = "https://github.com/zssong601";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Song Zhang home">SONG <span>ZHANG</span></a>
        <nav aria-label="Primary navigation"><a href="/work">Work</a><a href="#insights">Insights</a><a href="#research">Research</a><a href="#about">About</a><a href="#advisory">Advisory</a></nav>
        <a className="header-cta" href="#advisory">Start here <span>↗</span></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FORMULATION DEVELOPMENT × MATERIALS AI</p>
          <h1>Connecting formulation development, experiments, and AI for better materials R&amp;D.</h1>
          <p className="hero-lede">I combine chemical selection, formulation and processing design, characterization, automated analysis, and physics-aware machine learning to build richer datasets, clearer scientific insight, and more reproducible R&amp;D workflows.</p>
          <div className="hero-actions"><a className="button button-dark" href="/work">Explore selected work <span>↓</span></a><a className="text-link" href="#research">View research foundations <span>→</span></a></div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><img src="/assets/song-zhang-portrait.jfif" alt="Song Zhang" width={800} height={800} /></div><p className="portrait-caption"><span>SONG ZHANG</span><br />Formulation and experimental depth.<br />Computational extensions.</p><div className="hero-coordinate">CHEMISTRY / PROCESS / EVIDENCE / MODEL<br /><span>MATERIALS DEVELOPMENT AS A CONNECTED SYSTEM</span></div></div>
      </section>

      <section className="bridge-panel section-shell" aria-labelledby="bridge-title">
        <div className="section-intro"><p className="eyebrow">THE RESEARCH SYSTEM</p><h2 id="bridge-title">Two evidence routes. One learning loop.</h2><p>Experimental data and literature evidence each matter. Together, they enable more useful models and better experiment planning.</p></div>
        <div className="system-map"><div className="system-origins"><article className="system-card rust"><span>01 · DATA ORIGIN</span><h3>Instrument data</h3><p>Automated analysis of characterization outputs from formulation and process experiments.</p></article><article className="system-card blue"><span>02 · DATA ORIGIN</span><h3>Literature data</h3><p>Extracted and curated evidence from publications, with source context preserved.</p></article></div><div className="map-arrow merge"><span>CONVERGE</span><b>→</b></div><article className="system-card violet model-card"><span>03 · LEARNING SYSTEM</span><h3>Machine learning</h3><p>Feature engineering, validation, uncertainty, and scientific interpretation.</p></article><div className="map-arrow"><b>→</b></div><article className="system-card green active-card"><span>04 · EXPERIMENT LOOP</span><h3>Active learning</h3><p>Use constraints and uncertainty to prioritize the next informative experiment.</p></article></div>
        <p className="system-loop"><span>↺</span> Active learning informs the next formulation and experiment.</p><p className="bridge-outcome"><span>OUTCOMES</span> Better scientific understanding <b>+</b> more reproducible development workflows</p>
      </section>

      <section className="thesis section-shell"><p className="section-label">WORKING PRINCIPLE</p><blockquote>“Automate the routine. Keep the expert in the loop.”</blockquote><p>Useful analysis workflows make repeatable work more consistent while keeping scientific interpretation visible at the points where it matters.</p></section>

      <section className="work section-shell" id="work"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Building the system in public.</h2></div><p>Four connected areas of technical exploration.<br /><a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">Explore technical work on GitHub <span>↗</span></a></p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.index}><div className="project-index">{project.index}</div><div className="project-main"><p className="project-stage">{project.stage}</p><h3>{project.title}</h3><p>{project.summary}</p></div><div className="project-note"><p>{project.note}</p><a href={`/work/${["automated-instrument-data-analysis", "literature-data-extraction-curation", "machine-learning-pipelines", "active-learning-experimental-design"][Number(project.index) - 1]}`} aria-label={`Read about ${project.title}`}>Read case study <span>↗</span></a></div></article>)}</div></section>

      <section className="figure-band section-shell"><div className="figure-copy"><p className="eyebrow">FIGURE 01</p><h2>From evidence to model.</h2><p>Materials data is more than a stored table. Its usefulness depends on how every label was created, transformed, and validated.</p><a className="text-link" href="#insights">Read the note <span>→</span></a></div><figure><img src="/assets/data-origins.png" alt="Diagram showing sources and curation of materials AI data" width={1122} height={1402}/><figcaption>Data provenance is a scientific design decision.</figcaption></figure></section>

      <section className="insights section-shell" id="insights"><div className="section-heading"><div><p className="eyebrow">NOTES FROM THE FIELD</p><h2>Ideas worth examining closely.</h2></div><a className="text-link" href="/insights">All insights <span>→</span></a></div><div className="notes-grid">{notes.map(([category, title, summary], index) => <article className="note" key={title}><p className="note-number">0{index + 1} / {category}</p><h3>{title}</h3><p>{summary}</p><a href={`/insights#${["evidence", "features", "human-loop"][index]}`} aria-label={`Read ${title}`}>Read note <span>→</span></a></article>)}</div></section>

      <section className="research section-shell" id="research">
        <div className="research-metrics"><p className="eyebrow">RESEARCH FOUNDATIONS</p><h2>Experimental depth informs computational questions.</h2><p>My research connects materials structure, processing, characterization, and performance—from ultrathin-film mechanics and glass transition to formulation and coating development.</p><div className="metric-stamp"><span>RESEARCH RECORD</span><strong>60+ peer-reviewed publications</strong><em>14+ patents, applications, and trade-secret disclosures</em></div></div>
        <div className="publication-list">
          <article><p>FEATURED PAPER 01</p><h3>Toward the Prediction and Control of Glass Transition Temperature for Donor-Acceptor Polymers</h3><span>Advanced Functional Materials · 2020</span></article>
          <article><p>FEATURED PAPER 02</p><h3>Direct Probing the Fracture Behavior of Ultra-Thin Polymeric Films</h3><span>ACS Polymers Au · 2021</span></article>
          <article><p>FEATURED PAPER 03</p><h3>Molecular Origin of Strain-Induced Chain Alignment in PDPP-Based Semiconducting Polymeric Thin Films</h3><span>Advanced Functional Materials · 2021</span></article>
          <a className="text-link" href={scholarUrl} target="_blank" rel="noreferrer">View complete record on Google Scholar <span>↗</span></a>
        </div>
      </section>

      <section className="about section-shell" id="about"><div className="about-copy"><p className="eyebrow">ABOUT</p><h2>Formulation, processing, characterization, and the systems that connect them.</h2><p>I am a materials engineer and polymer scientist with experience developing adhesives, sealants, primers, hard coats, and thin-film processes. My work spans chemical selection, formulation development, characterization, qualification planning, and lab-to-pilot transfer. I use materials informatics to make that experimental foundation more searchable, reproducible, and useful—not to replace scientific judgment.</p><p><a className="text-link" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a> <span aria-hidden="true"> · </span> <a className="text-link" href="#contact">Discuss a collaboration <span>→</span></a></p></div><div className="about-figure"><img src="/assets/closed-loop-materials-informatics.png" alt="Closed-loop materials informatics workflow" width={941} height={1672}/></div></section>

      <section className="advisory section-shell" id="advisory"><div><p className="eyebrow">ADVISORY</p><h2>New to AI in materials R&amp;D?</h2><p>For individuals and teams who want a practical, responsible place to begin. Take the short readiness check, or start with a free 15-minute Google Meet fit call.</p><a className="text-link" href="/readiness">Take the AI-readiness check <span>→</span></a></div><ol><li><span>01</span> Choose a practical starting point</li><li><span>02</span> Book a 15-minute fit call</li><li><span>03</span> Choose the appropriate next step</li></ol><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book a fit call <span>→</span></a></section>

      <section className="contact section-shell" id="contact"><p className="eyebrow">CONTACT</p><h2>Start with the context.</h2><p>Interested in materials informatics, scientific automation, or a learning path for your team? Book a free 15-minute Google Meet fit call to discuss what you are trying to understand or build.</p><a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Book a fit call <span>↗</span></a></section>
      <footer><span>© {new Date().getFullYear()} Song Zhang</span><span>FORMULATION DEVELOPMENT × MATERIALS AI</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
