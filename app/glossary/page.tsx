const glossary = [
  { term: "Autophagy", definition: "Cellular recycling process that increases during prolonged fasting." },
  { term: "Sentinel Visibility", definition: "A model score representing how detectable the target may be." },
  { term: "Fortress Softness", definition: "A model score indicating reduced defense rigidity after selected bioactives." },
  { term: "APS", definition: "External system endpoint integrated by this app through APS_ENDPOINT." },
  { term: "EHR", definition: "Electronic Health Record endpoint integrated via EHR_ENDPOINT." }
];

export default function GlossaryPage() {
  return (
    <main>
      <h1>Glossary</h1>
      {glossary.map((item) => (
        <article className="card" key={item.term}>
          <h2>{item.term}</h2>
          <p>{item.definition}</p>
        </article>
      ))}
    </main>
  );
}
