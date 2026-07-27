"use client";

import { useState } from "react";

const questions = [
  { id: "context", prompt: "Where are you starting from?", options: ["I am learning as an individual", "I work in a research or development team", "I lead a technical or business team"] },
  { id: "evidence", prompt: "What evidence would you most like to work with?", options: ["Instrument or image data", "Papers, tables, or existing reports", "Formulations, process conditions, or experiment plans", "I am not sure yet"] },
  { id: "goal", prompt: "What would make AI useful first?", options: ["Reduce repetitive analysis work", "Create a usable dataset", "Prioritize the next experiments", "Understand what is realistic"] },
  { id: "readiness", prompt: "How organized is the data today?", options: ["Mostly files and spreadsheets", "Structured, but still manually processed", "Repeatable workflows already exist", "I am not sure"] },
];

type Answers = Record<string, string>;

export default function ReadinessCheck() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);
  const complete = questions.every((question) => answers[question.id]);
  const isWorkflow = answers.goal === "Reduce repetitive analysis work" || answers.evidence === "Instrument or image data";
  const isData = answers.goal === "Create a usable dataset" || answers.evidence === "Papers, tables, or existing reports";
  const result = isWorkflow ? "Start with one repeatable analysis workflow. Pick a recurring instrument, image, or spreadsheet task; define the expert checks; then make the output reviewable and reusable." : isData ? "Start with an evidence map. Define one materials question, identify its sources, and decide what context needs to stay attached to each record." : "Start with one concrete decision. Name the formulation, process, or experiment choice you want to improve, then work backward to the evidence that would make that decision stronger.";
  return <div className="readiness-check">{!showResult ? <><div className="survey-questions">{questions.map((question, questionIndex) => <fieldset key={question.id}><legend><span>0{questionIndex + 1}</span>{question.prompt}</legend><div>{question.options.map((option) => <label key={option}><input type="radio" name={question.id} value={option} checked={answers[question.id] === option} onChange={() => setAnswers({ ...answers, [question.id]: option })} /><span>{option}</span></label>)}</div></fieldset>)}</div>{complete && <div className="survey-complete"><p>All four questions are answered.</p><button className="button button-dark" onClick={() => setShowResult(true)}>See your suggested starting point <span>→</span></button></div>}</> : <div className="survey-result"><p className="eyebrow">YOUR SUGGESTED STARTING POINT</p><h2>{result}</h2><p>Use this as the agenda for a focused fit call. We can identify one concrete workflow, define the evidence needed, and decide whether a hands-on session is useful.</p><div className="survey-actions"><a className="button button-dark" href="https://calendly.com/zssong601/15min" target="_blank" rel="noreferrer">Book a 15-minute fit call <span>↗</span></a><button className="reset-button" onClick={() => { setAnswers({}); setShowResult(false); }}>Start again</button></div></div>}</div>;
}
