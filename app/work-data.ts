export type WorkItem = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  lead: string;
  steps: Array<{ title: string; body: string }>;
  examples: string[];
};

export const workItems: WorkItem[] = [
  {
    slug: "automated-instrument-data-analysis",
    number: "01",
    eyebrow: "DATA ORIGIN / EXPERIMENTAL",
    title: "Automated Instrument Data Analysis",
    subtitle: "Expert-in-the-loop automation from instrument output to ML-ready data.",
    lead: "A methods demonstration of how data from formulation and process experiments can move from raw instrument exports to consistent, interpretable reports—without removing scientific review from the workflow.",
    steps: [
      { title: "Standardize input", body: "Bring common instrument exports into a consistent, inspectable format." },
      { title: "Check quality", body: "Identify incomplete files, baseline issues, or images that need human review." },
      { title: "Apply analysis logic", body: "Use transparent, method-specific rules to detect and quantify meaningful features." },
      { title: "Report consistently", body: "Create annotated figures and summarized tables for review and downstream use." },
      { title: "Preserve judgment", body: "Keep interpretation and exceptions visible to the scientist rather than hiding them behind automation." },
    ],
    examples: ["Optical microscopy: contrast, defects, coverage, and geometry", "FT-IR: cleanup, peak fitting, and interpretable spectral features", "DSC: glass transition, crystallization, and melting behavior"],
  },
  {
    slug: "literature-data-extraction-curation",
    number: "02",
    eyebrow: "DATA ORIGIN / LITERATURE",
    title: "Literature Data Extraction & Curation",
    subtitle: "Transforming publications and tables into traceable materials datasets.",
    lead: "A public evidence pipeline that goes beyond PDF extraction: every structured value keeps the source context needed to judge what it means and whether it is usable.",
    steps: [
      { title: "Find relevant evidence", body: "Locate papers and tables that address a defined materials question." },
      { title: "Extract the record", body: "Capture the reported value together with conditions, units, and nearby evidence." },
      { title: "Normalize carefully", body: "Standardize fields and units without erasing distinctions that matter scientifically." },
      { title: "Validate context", body: "Check provenance, duplicate reports, and whether comparison across studies is defensible." },
      { title: "Make it traceable", body: "Link structured records back to their source paper and supporting context." },
    ],
    examples: ["Published formulation and process conditions", "Reported characterization values and test methods", "Tables and evidence passages linked to a source paper"],
  },
  {
    slug: "machine-learning-pipelines",
    number: "03",
    eyebrow: "LEARNING SYSTEM",
    title: "Machine Learning Pipelines",
    subtitle: "From feature engineering to validated models and scientific interpretation.",
    lead: "A Tg-focused public demonstration of how formulation, process, and characterization data can be represented, modeled, and evaluated without confusing prediction with scientific proof.",
    steps: [
      { title: "Define the question", body: "Specify the material property, decision context, and evidence needed for a useful prediction." },
      { title: "Represent the system", body: "Combine formulation, process, chemical, and measurement context into useful features." },
      { title: "Start with baselines", body: "Compare simple reference models before adding complexity." },
      { title: "Validate honestly", body: "Use splits and metrics that match the scientific generalization question." },
      { title: "Interpret with care", body: "Use model behavior to generate hypotheses, while separating association from causation." },
    ],
    examples: ["Tg as a first public prediction target", "Formulation and process conditions as model inputs", "Instrument-derived measurements as targets, inputs, or validation evidence"],
  },
  {
    slug: "active-learning-experimental-design",
    number: "04",
    eyebrow: "EXPERIMENT LOOP",
    title: "Active Learning & Experimental Design",
    subtitle: "Using uncertainty and constraints to prioritize informative next experiments.",
    lead: "A simulated Tg-focused formulation environment that shows how a learning system can balance promising candidates, uncertainty, and experimental feasibility.",
    steps: [
      { title: "Define the virtual space", body: "Set transparent assumptions for a public or synthetic formulation-design problem." },
      { title: "Fit a surrogate", body: "Train a model that estimates performance and uncertainty from existing observations." },
      { title: "Apply constraints", body: "Keep recommendations inside feasible formulation and process boundaries." },
      { title: "Select the next test", body: "Balance predicted value, uncertainty, diversity, and cost." },
      { title: "Learn again", body: "Use each new result to update the model and the next recommendation." },
    ],
    examples: ["Uncertainty-aware candidate selection", "Bayesian optimization as an experiment-planning tool", "Simulated closed-loop improvement with stated assumptions"],
  },
];

export const workBySlug = (slug: string) => workItems.find((item) => item.slug === slug);
