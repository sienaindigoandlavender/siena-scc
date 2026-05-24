import { wikiEntries } from "@/data/wiki";

export default function WikiPage({ searchParams }: { searchParams?: { q?: string } }) {
  const q = (searchParams?.q ?? "").trim().toLowerCase();
  const filtered = q
    ? wikiEntries.filter((entry) =>
        `${entry.title} ${entry.category} ${entry.content} ${entry.tags.join(" ")}`.toLowerCase().includes(q)
      )
    : wikiEntries;

  return (
    <main>
      <h1>Knowledge Wiki</h1>
      <form>
        <input name="q" defaultValue={searchParams?.q ?? ""} placeholder="Search terms, tags, content..." />
        <button type="submit">Search</button>
      </form>
      <p>{filtered.length} result(s)</p>
      {filtered.map((entry) => (
        <article className="card" key={entry.id}>
          <h2>{entry.title}</h2>
          <p>
            <strong>{entry.category}</strong>
          </p>
          <p>{entry.content}</p>
          <p>Tags: {entry.tags.join(", ")}</p>
        </article>
      ))}
    </main>
  );
}
