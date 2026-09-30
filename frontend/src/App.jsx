import { useEffect, useState } from "react";

// Uses the same host the page was opened from, so it works on localhost and on an EC2 public IP.
const API = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:4000`;

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API}/api/hello`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError("Could not reach the backend"));
  }, []);

  return (
    <main>
      <h1>Full Stack Docker App</h1>
      <p className="sub">React frontend + Node.js backend</p>
      <div className="card">
        {error && <span className="err">{error}</span>}
        {!error && !data && <span>Loading…</span>}
        {data && (
          <>
            <strong>{data.message}</strong>
            <small>{data.time}</small>
          </>
        )}
      </div>
    </main>
  );
}
