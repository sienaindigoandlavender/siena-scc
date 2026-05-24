const demoPayload = {
  lastMealTime: "18:15",
  currentTime: "22:15",
  bioactives: ["Nigella", "Sulforaphane", "Ginger", "EGCG", "Olive Oil"]
};

export default function Page() {
  return (
    <main>
      <h1>Siena Siege API (Next.js + Vercel)</h1>
      <p>Use the API endpoint below in your frontend or automation flow.</p>

      <div className="card">
        <p>
          <strong>POST</strong> <code>/api/siege-status</code>
        </p>
        <p>JSON body example:</p>
        <pre>{JSON.stringify(demoPayload, null, 2)}</pre>
      </div>
    </main>
  );
}
