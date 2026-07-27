const projects = [
  { index: "01", stage: "DATA ORIGIN 01", title: "Automated Instrument Data Analysis", summary: "Turning characterization outputs into reviewable, ML-ready datasets.", note: "Illustrative case studies: optical microscopy, FT-IR, and DSC." },
  { index: "02", stage: "DATA ORIGIN 02", title: "Literature Data Extraction & Curation", summary: "Transforming published evidence into structured, traceable materials datasets.", note: "Extraction, normalization, source context, and human validation." },
  { index: "03", stage: "LEARNING SYSTEM", title: "Machine Learning Pipelines", summary: "From feature engineering to validated models and scientific interpretation.", note: "Connecting formulation, process, and characterization data." },
  { index: "04", stage: "EXPERIMENT LOOP", title: "Active Learning & Experimental Design", summary: "Using uncertainty and constraints to prioritize informative next experiments.", note: "A public, simulated demonstration of a closed-loop learning workflow." },
];

const bookingUrl = "https://calendly.com/zssong601/15min";
const scholarUrl = "https://scholar.google.com/citations?user=osQ0uCwAAAAJ&hl=zh-CN";
const linkedInUrl = "https://www.linkedin.com/in/song-zhang-stanford";
const projectSlugs = ["automated-instrument-data-analysis", "literature-data-extraction-curation", "machine-learning-pipelines", "active-learning-experimental-design"];
const blogPosts = [
  { label: "MATERIALS INFORMATICS", title: "Where materials-AI data actually comes from", summary: "Why a model-ready table is not the same as independent experimental evidence.", href: "/insights#evidence" },
  { label: "SCIENTIFIC AI", title: "Physics-aware features are not physics-aware machine learning", summary: "How to separate a useful representation from an overstated physical claim.", href: "/insights#features" },
  { label: "AI PRACTICE", title: "What should remain human in an AI-assisted workflow?", summary: "A practical view of the expert decisions that should stay visible.", href: "/insights#human-loop" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Song Zhang home">SONG <span>ZHANG</span></a>
        <nav aria-label="Primary navigation"><a href="#top">Home</a><a href="#research">Research</a><a href="#blog">Blog</a><a href="#advisory">Advisory</a></nav>
        <a className="header-cta" href="#advisory">Start here <span>↗</span></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">STRUCTURE–PROCESS–MORPHOLOGY–PROPERTY RELATIONSHIPS</p>
          <h1><span>AI-enabled materials R&amp;D</span><span>Grounded in experiments.</span></h1>
          <p className="hero-lede">I connect materials design, processing, characterization, and data analysis to make development decisions more reproducible and useful.</p>
          <div className="hero-profile"><p>Materials R&amp;D scientist working across material selection, formulation, process development, characterization, and data-informed decisions.</p><a className="text-link" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a></div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><img src="/assets/song-zhang-portrait.jfif" alt="Song Zhang" width={800} height={800} /></div><p className="hero-credentials"><span>Current senior polymer scientist</span>E Ink Corporation<br /><span>Former postdoctoral researcher</span>Stanford University · Chemical Engineering<br /><span>PhD, Polymer Science and Engineering</span>University of Southern Mississippi</p></div>
      </section>

      <section className="research section-shell" id="research">
        <div className="research-metrics"><p className="eyebrow">RESEARCH FOUNDATIONS</p><h2>A research record built in the lab.</h2><p>My work spans polymer physics, materials characterization, formulation development, and structure–property relationships. That experimental foundation shapes how I approach data, models, and development decisions.</p><div className="metric-stamp"><span>RESEARCH RECORD</span><strong><b>60+</b> peer-reviewed publications</strong><strong><b>14+</b> patents, applications, and trade-secret disclosures</strong></div></div>
        <div className="publication-list"><article><p>FEATURED PAPER 01</p><h3>Toward the Prediction and Control of Glass Transition Temperature for Donor-Acceptor Polymers</h3><span>Advanced Functional Materials · 2020</span></article><article><p>FEATURED PAPER 02</p><h3>Direct Probing the Fracture Behavior of Ultra-Thin Polymeric Films</h3><span>ACS Polymers Au · 2021</span></article><article><p>FEATURED PAPER 03</p><h3>Molecular Origin of Strain-Induced Chain Alignment in PDPP-Based Semiconducting Polymeric Thin Films</h3><span>Advanced Functional Materials · 2021</span></article><a className="text-link" href={scholarUrl} target="_blank" rel="noreferrer">View complete record on Google Scholar <span>↗</span></a></div>
      </section>

      <section className="work section-shell" id="work">
        <div className="work-heading"><p className="eyebrow">SELECTED WORK</p><h2>How I support materials R&amp;D.</h2><p>Four connected areas of technical exploration.</p></div>
        <aside className="work-principle"><div><p className="section-label">HOW I WORK</p><h3>Design workflows with domain experts in the loop.</h3><p className="work-principle-lede">Automation should make expert decisions easier to apply, review, and improve—not hide them.</p></div><ol><li><span>01</span><p><strong>Define the evidence</strong>Decide what information is meaningful enough to extract.</p></li><li><span>02</span><p><strong>Design the pipeline</strong>Make inputs, outputs, and checks explicit.</p></li><li><span>03</span><p><strong>Interpret the result</strong>Connect the output back to the material question.</p></li></ol></aside>
        <div className="project-list">{projects.map((project) => <article className="project" key={project.index}><div className="project-index">{project.index}</div><div className="project-main"><p className="project-stage">{project.stage}</p><h3>{project.title}</h3><p>{project.summary}</p></div><div className="project-note"><p>{project.note}</p><a href={`/work/${projectSlugs[Number(project.index) - 1]}`} aria-label={`Read about ${project.title}`}>Read case study <span>↗</span></a></div></article>)}</div>
      </section>

      <section className="blog section-shell" id="blog"><div className="blog-heading"><div><p className="eyebrow">BLOG</p><h2>Thoughts, practices, and reading notes.</h2></div><p>Short writing on practical materials R&amp;D, data workflows, and the questions worth examining more closely.</p></div><div className="blog-grid">{blogPosts.map((post, index) => <article key={post.title}><p>0{index + 1} / {post.label}</p><h3>{post.title}</h3><p>{post.summary}</p><a href={post.href}>Read article <span>→</span></a></article>)}</div><a className="text-link blog-all" href="/insights">Browse all writing <span>→</span></a></section>

      <section className="advisory section-shell" id="advisory"><div><p className="eyebrow">ADVISORY</p><h2>New to AI in materials R&amp;D?</h2><p>For individuals and teams who want a practical, responsible place to begin. Take the short readiness check, or start with a free 15-minute Google Meet fit call.</p><a className="text-link" href="/readiness">Take the AI-readiness check <span>→</span></a></div><ol><li><span>01</span> Choose a practical starting point</li><li><span>02</span> Book a 15-minute fit call</li><li><span>03</span> Choose the appropriate next step</li></ol><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book a fit call <span>→</span></a></section>


      <footer><span>© {new Date().getFullYear()} Song Zhang</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
