import { workItems } from "../work-data";

export default function WorkIndexPage() {
  return <main className="inner-page">
    <header className="site-header"><a className="wordmark" href="/" aria-label="Song Zhang home">SONG <span>ZHANG</span></a><nav aria-label="Primary navigation"><a href="/work">Work</a><a href="/#insights">Insights</a><a href="/#research">Research</a><a href="/#about">About</a><a href="/#advisory">Advisory</a></nav><a className="header-cta" href="/#advisory">Start here <span>↗</span></a></header>
    <section className="work-index-hero section-shell"><p className="eyebrow">SELECTED WORK</p><h1>Four connected systems for more useful materials data.</h1><p>Two evidence routes converge into modeling, then help inform better experiments.</p></section>
    <section className="work-index-list section-shell">{workItems.map((item) => <article className="work-index-card" key={item.slug}><div><span>{item.number}</span><p>{item.eyebrow}</p></div><div><h2>{item.title}</h2><p>{item.subtitle}</p></div><a href={`/work/${item.slug}`}>Explore the case study <span>↗</span></a></article>)}</section>
    <footer><span>© {new Date().getFullYear()} Song Zhang</span><span>FORMULATION DEVELOPMENT × MATERIALS AI</span><a href="/">Home ↑</a></footer>
  </main>;
}
