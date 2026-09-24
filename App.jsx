import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showMap, setShowMap] = useState(false);
  const [traffic, setTraffic] = useState(82);
const [rainfall, setRainfall] = useState(42);
const [incidents, setIncidents] = useState(24);
const [aqi, setAqi] = useState(156);
const [citySummary, setCitySummary] = useState(
  
  "Heavy rainfall and high traffic activity are currently being observed."
);
const [alertMessage, setAlertMessage] = useState(
  "Traffic congestion detected"
);
const [lastUpdated, setLastUpdated] = useState("just now");
const [demoMode, setDemoMode] = useState(false);
const [cityStatus, setCityStatus] = useState("Attention");
const [statusDescription, setStatusDescription] = useState(
  "Some civic activity needs attention."
);

useEffect(() => {
  const interval = setInterval(() => {
    if (!demoMode) return;
    const newTraffic = Math.floor(Math.random() * 20) + 75;
    const newRainfall = Math.floor(Math.random() * 10) + 35;
    const newIncidents = Math.floor(Math.random() * 5) + 22;
    const newAqi = Math.floor(Math.random() * 30) + 140;
setLastUpdated(new Date().toLocaleTimeString());
    setTraffic(newTraffic);
    setRainfall(newRainfall);
    setIncidents(newIncidents);
    setAqi(newAqi);
    setLastUpdated(new Date().toLocaleTimeString());
    if (newTraffic >= 85) {
  setAlertMessage("High traffic congestion detected");
} else if (newRainfall >= 40) {
  setAlertMessage("Heavy rainfall detected");
} else if (newAqi >= 155) {
  setAlertMessage("Poor air quality detected");
} else {
  setAlertMessage("Civic conditions are stable");
}

    if (newTraffic >= 85 && newRainfall >= 40) {
      setCitySummary(
        "Heavy rainfall and high traffic activity are currently being observed."
      );
    } else if (newAqi >= 155) {
      setCitySummary(
        "Air quality is currently poor and should be monitored."
      );
    } else {
      setCitySummary(
        "Civic conditions are currently within normal levels."
      );
    }
  }, 3000);

  return () => clearInterval(interval);
}, [demoMode]);
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <div className="app">

      {/* HEADER */}
      <header className="topbar">
        <div className="brand">
          <div className="logo">CP</div>
          <div>
            <h1>CityPulse</h1>
            <p>Live Civic Health Dashboard • See the pulse of Jaipur</p>
          </div>
        </div>

        <div className="location">
          <button
  className="map-button"
  onClick={() => setDemoMode(!demoMode)}
>
  {demoMode ? "⏹ Stop Demo" : "▶ Demo Mode"}
</button>
{demoMode && (
  <span className="demo-indicator">
    ● SIMULATION ACTIVE
  </span>
)}
          <span>📍 Jaipur</span>
          <span className="live">● LIVE</span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container">

        {/* CITY STATUS */}
        <section className="city-status">
          <div>
            <p className="small-title">CITY STATUS</p>
            <h2>⚠️ {cityStatus}</h2>
            <p>{statusDescription}</p>
          </div>

          <div className="status-time">
           Updated {lastUpdated}
          </div>
        </section>

        {/* STAT CARDS */}
        <section className="stats">

          <div className="stat-card weather-card">
            <div className="card-top">
              <span>🌧️</span>
              <span className="tag">WEATHER</span>
            </div>
            <h3>Heavy Rain</h3>
<p>{rainfall} mm rainfall</p>
          </div>

          <div className="stat-card traffic-card">
            <div className="card-top">
              <span>🚗</span>
              <span className="tag">TRAFFIC</span>
            </div>
            <h3>High</h3>
            <p>{traffic}% congestion</p>
          </div>

          <div className="stat-card incident-card">
            <div className="card-top">
              <span>🚨</span>
              <span className="tag">INCIDENTS</span>
            </div>
            <h3>{incidents} Reports</h3>
            <p>Last 60 minutes</p>
          </div>

          <div className="stat-card air-card">
            <div className="card-top">
              <span>🌫️</span>
              <span className="tag">AIR QUALITY</span>
            </div>
            <h3>AQI {aqi}</h3>
            <p>Unhealthy</p>
          </div>

        </section>

        {/* MAP + PATTERN */}
        <section className="main-grid">

          {/* MAP */}
          <div className="panel map-panel">

            <div className="panel-header">
              <div>
                <h2>🗺️ Live City Map</h2>
                <p>Current civic activity by zone</p>
              </div>

             <button
  className="map-button"
  onClick={() => setShowMap(true)}
>
  View Full Map
</button>
            </div>

            <div className="map">

              <div className="zone zone-a">
                <span>🔴</span>
                <b>Zone A</b>
              </div>

              <div className="zone zone-b">
                <span>🟠</span>
                <b>Zone B</b>
              </div>

              <div className="zone zone-c">
                <span>🔵</span>
                <b>Zone C</b>
              </div>

              <div className="zone zone-d">
                <span>🟢</span>
                <b>Zone D</b>
              </div>

              <div className="road road-1"></div>
              <div className="road road-2"></div>
              <div className="road road-3"></div>

            </div>

            <div className="legend">
              <span>🔴 Incident</span>
              <span>🟠 Traffic</span>
              <span>🔵 Weather</span>
              <span>🟢 Normal</span>
            </div>

          </div>

          {/* DETECTED PATTERN */}
          <div className="panel pattern-panel">

            <div className="panel-header">
              <div>
                <h2>🔎 Detected Pattern</h2>
                <p>Possible correlation</p>
              </div>
            </div>

            <div className="pattern-box">

              <div className="pattern-item">
                <span>🌧️</span>
                <div>
                  <b>Heavy Rain</b>
                  <p>{rainfall} mm in the last hour</p>
                </div>
              </div>

              <div className="arrow">↓</div>

              <div className="pattern-item">
                <span>🚗</span>
                <div>
                  <b>Traffic Increased</b>
                  <p>Congestion reached {traffic}%</p>
                </div>
              </div>

              <div className="arrow">↓</div>

              <div className="pattern-item">
                <span>🚨</span>
                <div>
                  <b>More Incidents</b>
                  <p>{incidents} Reports detected</p>
                </div>
              </div>

            </div>

            <p className="pattern-note">
              These events happened in the same area and time window.
              This indicates a possible relationship, not confirmed causation.
            </p>

          </div>

        </section>
{/* DATA SOURCES */}
<section className="panel sources-panel">
  <div className="panel-header">
    <div>
      <h2>📡 Live Data Sources</h2>
      <p>Connected civic feeds</p>
    </div>
  </div>

  <div className="sources">
    <div className="source">
      <span>🌧️</span>
      <div>
        <b>Weather Feed</b>
        <p>Rainfall monitoring</p>
      </div>
      <span className="source-live">● LIVE</span>
    </div>

    <div className="source">
      <span>🚗</span>
      <div>
        <b>Traffic Feed</b>
        <p>Congestion monitoring</p>
      </div>
      <span className="source-live">● LIVE</span>
    </div>

    <div className="source">
      <span>🚨</span>
      <div>
        <b>Civic Incidents</b>
        <p>Incident reports</p>
      </div>
      <span className="source-live">● LIVE</span>
    </div>

    <div className="source">
      <span>🌫️</span>
      <div>
        <b>Air Quality</b>
        <p>AQI monitoring</p>
      </div>
      <span className="source-live">● LIVE</span>
    </div>
  </div>
</section>
{/* DATA PIPELINE */}
<section className="panel pipeline-panel">
  <div className="panel-header">
    <div>
      <h2>🔄 Civic Data Pipeline</h2>
      <p>How CityPulse processes civic data</p>
    </div>
  </div>

  <div className="pipeline">
    <div className="pipeline-step">
      <span>📡</span>
      <b>Raw Feeds</b>
      <p>Weather • Traffic • Incidents • AQI</p>
    </div>

    <div className="pipeline-arrow">→</div>

    <div className="pipeline-step">
      <span>⚙️</span>
      <b>Normalize</b>
      <p>Common format + timestamp</p>
    </div>

    <div className="pipeline-arrow">→</div>

    <div className="pipeline-step">
      <span>🔎</span>
      <b>Analyze</b>
      <p>Patterns + anomalies</p>
    </div>

    <div className="pipeline-arrow">→</div>

    <div className="pipeline-step">
      <span>📊</span>
      <b>Dashboard</b>
      <p>Live civic insights</p>
    </div>
  </div>
</section>
{/* ANOMALY DETECTION */}
<section className="panel anomaly-panel">
  <div className="panel-header">
    <div>
      <h2>🚨 Anomaly Detection</h2>
      <p>Unusual civic activity detected by CityPulse</p>
    </div>

    <span className="alert-count">MONITORING</span>
  </div>

  <div className="anomaly-box">
    <div className="anomaly-icon">⚠️</div>

    <div>
      <b>Traffic activity is above normal levels</b>
      <p>
        Current congestion is being compared with the recent simulated
        baseline to identify unusual changes.
      </p>
    </div>
  </div>
</section>
{/* POSSIBLE CORRELATION */}
<section className="panel correlation-panel">
  <div className="panel-header">
    <div>
      <h2>🔗 Possible Correlation</h2>
      <p>Patterns observed across civic data</p>
    </div>
  </div>

  <div className="correlation-box">
    <div className="correlation-flow">
      <span>🌧️ Heavy Rain</span>
      <span>+</span>
      <span>🚗 High Traffic</span>
      <span>+</span>
      <span>🚨 Incidents</span>
    </div>

    <p>
      These events are occurring within the same area and time window.
      CityPulse identifies this as a possible relationship, not confirmed causation.
    </p>
  </div>
</section>
{/* LIVE ACTIVITY FEED */}
<section className="panel activity-panel">
  <div className="panel-header">
    <div>
      <h2>📡 Live Activity Feed</h2>
      <p>Recent civic events received by CityPulse</p>
    </div>

    <span className="alert-count">LIVE</span>
  </div>

  <div className="activity-list">
    <div className="activity-item">
      <span className="activity-icon">🚗</span>
      <div>
        <b>Traffic congestion updated</b>
        <p>Zone A • {traffic}% congestion</p>
      </div>
      <span className="activity-time">Now</span>
    </div>

    <div className="activity-item">
      <span className="activity-icon">🌧️</span>
      <div>
        <b>Rainfall data received</b>
        <p>Zone C • {rainfall} mm</p>
      </div>
      <span className="activity-time">Now</span>
    </div>

    <div className="activity-item">
      <span className="activity-icon">🚨</span>
      <div>
        <b>Civic incident update</b>
        <p>{incidents} active reports</p>
      </div>
      <span className="activity-time">Now</span>
    </div>

    <div className="activity-item">
      <span className="activity-icon">🌫️</span>
      <div>
        <b>Air quality updated</b>
        <p>AQI {aqi}</p>
      </div>
      <span className="activity-time">Now</span>
    </div>
  </div>
</section>
{/* HISTORICAL REPLAY */}
<section className="panel replay-panel">
  <div className="panel-header">
    <div>
      <h2>⏪ Historical Replay</h2>
      <p>Review recent civic activity patterns</p>
    </div>

    <span className="alert-count">DEMO</span>
  </div>

  <div className="replay-content">
    <div className="replay-bar">
      <div className="replay-progress"></div>
    </div>

    <div className="replay-times">
      <span>10 min ago</span>
      <span>5 min ago</span>
      <span>Now</span>
    </div>

    <p>
      Review how traffic, rainfall, incidents and air quality changed over
      the recent monitoring window.
    </p>
  </div>
</section>
{/* DATA HEALTH */}
<section className="panel health-panel">
  <div className="panel-header">
    <div>
      <h2>💚 Data Health</h2>
      <p>Current status of connected civic feeds</p>
    </div>

    <span className="alert-count">4 / 4 ONLINE</span>
  </div>

  <div className="health-grid">
    <div className="health-item">
      <span>🌧️</span>
      <div>
        <b>Weather</b>
        <p>Connected</p>
      </div>
      <strong>●</strong>
    </div>

    <div className="health-item">
      <span>🚗</span>
      <div>
        <b>Traffic</b>
        <p>Connected</p>
      </div>
      <strong>●</strong>
    </div>

    <div className="health-item">
      <span>🚨</span>
      <div>
        <b>Incidents</b>
        <p>Connected</p>
      </div>
      <strong>●</strong>
    </div>

    <div className="health-item">
      <span>🌫️</span>
      <div>
        <b>Air Quality</b>
        <p>Connected</p>
      </div>
      <strong>●</strong>
    </div>
  </div>
</section>
{/* HOW CITYPULSE WORKS */}
<section className="panel how-panel">
  <div className="panel-header">
    <div>
      <h2>🧠 How CityPulse Works</h2>
      <p>From raw civic data to understandable city insights</p>
    </div>
  </div>

  <div className="how-grid">
    <div className="how-step">
      <span>1</span>
      <h3>Collect</h3>
      <p>Receive weather, traffic, incident and AQI data.</p>
    </div>

    <div className="how-step">
      <span>2</span>
      <h3>Normalize</h3>
      <p>Convert different feeds into a common format.</p>
    </div>

    <div className="how-step">
      <span>3</span>
      <h3>Detect</h3>
      <p>Find unusual activity and possible correlations.</p>
    </div>

    <div className="how-step">
      <span>4</span>
      <h3>Explain</h3>
      <p>Turn complex civic data into simple insights.</p>
    </div>
  </div>
</section>
        {/* AI SUMMARY */}
        <section className="panel ai-panel">

          <div className="ai-icon">🤖</div>

          <div className="ai-content">
            <p className="small-title">AI CITY SUMMARY</p>

           <h2>
  Jaipur civic conditions are being monitored live.
</h2>

            <p>
              🤖 {citySummary}
            </p>
          </div>

        </section>

        {/* ALERTS */}
        <section className="panel alerts-panel">

          <div className="panel-header">
            <div>
              <h2>🚨 Recent Alerts</h2>
              <p>Latest civic events</p>
            </div>

            <span className="alert-count">{incidents} Active</span>
          </div>

          <div className="alerts">

            <div className="alert">
              <span className="alert-dot red"></span>
              <div>
                <b>{alertMessage}</b>
               <p>Live monitoring • {lastUpdated}</p>
              </div>
            </div>

            <div className="alert">
              <span className="alert-dot orange"></span>
              <div>
                <b>Multiple civic complaints</b>
                <p>Zone B • 12 minutes ago</p>
              </div>
            </div>

            <div className="alert">
              <span className="alert-dot blue"></span>
              <div>
                <b>Heavy rainfall detected</b>
                <p>Zone C • 18 minutes ago</p>
              </div>
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>
          CityPulse © 2026 • Live Civic Intelligence Platform
        </p>
      </footer>


      {/* FULL MAP MODAL */}
      {showMap && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.85)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "85%",
        height: "80%",
        background: "#111827",
        borderRadius: "20px",
        padding: "30px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>🗺️ CityPulse — Full City Map</h2>
          <p>Live civic activity by zone</p>
        </div>

        <button
          onClick={() => setShowMap(false)}
          style={{
            padding: "10px 18px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          ✕ Close
        </button>
      </div>

      <div
        style={{
          marginTop: "25px",
          height: "70%",
          borderRadius: "15px",
          background: "#1f2937",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "30px",
        }}
      >
        <button
  onClick={() => setSelectedZone("A")}
  style={{
    background: "#3f1d1d",
    borderRadius: "15px",
    padding: "30px",
    fontSize: "24px",
    color: "white",
    border: "2px solid #ef4444",
    cursor: "pointer",
  }}
>
  🔴 Zone A
  {selectedZone === "A" && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.75)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "400px",
      }}
    >
      <h2>🔴 Zone A Details</h2>

      <p>🚨 Incidents: <b>{incidents}</b></p>
<p>🚗 Traffic: <b>{traffic}%</b></p>
<p>🌧️ Rainfall: <b>{rainfall} mm</b></p>
      <p>⚠️ Status: <b>Attention</b></p>

      <p>
        🤖 AI Insight: Heavy rainfall may be associated
        with increased traffic activity in this zone.
      </p>

      <button
        onClick={(e) => {
  e.stopPropagation();
  setSelectedZone(null);
}}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✕ Close
      </button>
    </div>
  </div>
)}
{selectedZone === "B" && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.75)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "400px",
      }}
    >
      <h2>🟠 Zone B Details</h2>

     <p>🚨 Incidents: <b>{incidents}</b></p>
<p>🚗 Traffic: <b>{traffic}%</b></p>
      <p>📢 Complaints: <b>15</b></p>
      <p>⚠️ Status: <b>Moderate</b></p>

      <p>
        🤖 AI Insight: Increased traffic and civic complaints
        are being observed in this zone.
      </p>

      <button
        onClick={(e) => {
  e.stopPropagation();
  setSelectedZone(null);
}}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✕ Close
      </button>
    </div>
  </div>
)}
{selectedZone === "C" && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.75)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "400px",
      }}
    >
      <h2>🔵 Zone C Details</h2>

     <p>🌧️ Rainfall: <b>{rainfall} mm</b></p>
<p>🌫️ AQI: <b>{aqi}</b></p>
      <p>🚨 Incidents: <b>5</b></p>
      <p>⚠️ Status: <b>Attention</b></p>

      <p>
        🤖 AI Insight: Heavy rainfall and poor air quality
        are currently being monitored in this zone.
      </p>

      <button
        onClick={(e) => {
  e.stopPropagation();
  setSelectedZone(null);
}}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✕ Close
      </button>
    </div>
  </div>
)}
{selectedZone === "D" && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.75)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "400px",
      }}
    >
      <h2>🟢 Zone D Details</h2>

      <p>🚨 Incidents: <b>2</b></p>
    <p>🚗 Traffic: <b>{traffic}%</b></p> 
      <p>🌧️ Rainfall: <b>8 mm</b></p>
      <p>✅ Status: <b>Normal</b></p>

      <p>
        🤖 AI Insight: Civic activity is currently within
        normal levels in this zone.
      </p>

      <button
        onClick={(e) => {
  e.stopPropagation();
  setSelectedZone(null);
}}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✕ Close
      </button>
    </div>
  </div>
)}
</button>

      <button
  onClick={() => setSelectedZone("B")}
  style={{
    background: "#3f321d",
    borderRadius: "15px",
    padding: "30px",
    fontSize: "24px",
    color: "white",
    border: "2px solid #f59e0b",
    cursor: "pointer",
  }}
  
>
  🟠 Zone B
</button>

       <button
  onClick={() => setSelectedZone("C")}
  style={{
    background: "#1d3040",
    borderRadius: "15px",
    padding: "30px",
    fontSize: "24px",
    color: "white",
    border: "2px solid #3b82f6",
    cursor: "pointer",
  }}
  
>
  🔵 Zone C
</button>
        <button
  onClick={() => setSelectedZone("D")}
  style={{
    background: "#1d3f2a",
    borderRadius: "15px",
    padding: "30px",
    fontSize: "24px",
    color: "white",
    border: "2px solid #22c55e",
    cursor: "pointer",
  }}
>
  🟢 Zone D
</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default App;