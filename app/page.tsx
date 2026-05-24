export default function Page() {
  return (
    <main>
      <h1>Siena Siege Dashboard (Next.js + Vercel)</h1>
      <p>Live APIs and knowledge tools are available in this app.</p>

      <div className="card">
        <h2>Core APIs</h2>
        <ul>
          <li>POST <code>/api/siege-status</code></li>
          <li>GET <code>/api/integrations</code> (APS/Labs/EHR status)</li>
          <li>GET <code>/api/wiki?q=term</code> (searchable knowledge API)</li>
        </ul>
      </div>

      <div className="card">
        <h2>UI Pages</h2>
        <ul>
          <li><a href="/wiki">Searchable Wiki</a></li>
          <li><a href="/glossary">Glossary</a></li>
        </ul>
      </div>
    </main>
  );
}
