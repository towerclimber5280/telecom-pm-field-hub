const crews = [
  { name: "AUI HDD 01", area: "LI1.13", activity: "HDD / Conduit", status: "Active", production: "620 LF" },
  { name: "AUI HDD 02", area: "LI1.12", activity: "HDD / Conduit", status: "Active", production: "540 LF" },
  { name: "Fiber 01", area: "LI1.02", activity: "Fiber Placement", status: "Delayed", production: "410 LF" },
  { name: "Restore 01", area: "LI1.13", activity: "Restoration", status: "Active", production: "9 locations" }
];

const attention = [
  { level: "Critical", item: "Utility conflict", location: "Span 351", owner: "CM", status: "Open" },
  { level: "High", item: "Permit availability", location: "LI1.12", owner: "PM", status: "Monitoring" },
  { level: "Medium", item: "Restoration overdue", location: "Span 340", owner: "Contractor", status: "Open" }
];

const risks = [
  { id: "R-001", description: "Permit approval may delay planned work", probability: "Medium", impact: "High", response: "Mitigate", owner: "PM" },
  { id: "R-002", description: "Utility congestion may reduce HDD production", probability: "High", impact: "High", response: "Mitigate", owner: "CM" }
];

const issues = [
  { id: "I-001", description: "Unmarked utility discovered during potholing", priority: "Critical", owner: "CM", action: "Expose utility and verify revised bore path" },
  { id: "I-002", description: "Restoration backlog exceeds planned turnaround", priority: "High", owner: "Contractor", action: "Add restoration resources" }
];

function Stat({ label, value, sub }) {
  return <div className="card stat"><div className="label">{label}</div><div className="value">{value}</div><div className="sub">{sub}</div></div>;
}

export default function Home() {
  return (
    <main>
      <header>
        <div>
          <div className="eyebrow">TELECOM CONSTRUCTION PROJECT MANAGEMENT</div>
          <h1>Telecom PM Field Hub</h1>
          <p>FTTH Demo Project • Lisle, Illinois • Portfolio Prototype v0.1</p>
        </div>
        <div className="badge">FTTH / OSP</div>
      </header>

      <section className="notice">
        Demo data only. Designed for telecom construction managers and project managers.
      </section>

      <section className="grid stats">
        <Stat label="Overall Progress" value="68%" sub="Construction complete" />
        <Stat label="Schedule" value="Behind" sub="2 critical constraints" />
        <Stat label="Active Crews" value="4" sub="3 production • 1 restoration" />
        <Stat label="Open Issues" value="4" sub="1 critical" />
        <Stat label="Open Risks" value="3" sub="2 high exposure" />
        <Stat label="QC Items" value="6" sub="2 awaiting verification" />
      </section>

      <section className="two">
        <div className="panel">
          <div className="panelHead"><h2>Production</h2><span>Today</span></div>
          <div className="production">
            <div><strong>1,570 LF</strong><small>Conduit / fiber production</small></div>
            <div><strong>1,800 LF</strong><small>Daily target</small></div>
            <div><strong>87%</strong><small>Target achieved</small></div>
          </div>
          <div className="bar"><div style={{width:"87%"}}></div></div>
        </div>

        <div className="panel">
          <div className="panelHead"><h2>PM Health</h2><span>Current</span></div>
          <div className="health">
            <p><b>Safety</b><span className="good">No incidents</span></p>
            <p><b>Quality</b><span className="warn">6 open items</span></p>
            <p><b>Schedule</b><span className="bad">Behind plan</span></p>
            <p><b>Stakeholders</b><span className="good">Engaged</span></p>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panelHead"><h2>Crew & Field Production</h2><span>Daily field view</span></div>
        <div className="tableWrap"><table>
          <thead><tr><th>Crew</th><th>Area</th><th>Activity</th><th>Status</th><th>Production</th></tr></thead>
          <tbody>{crews.map((c,i)=><tr key={i}><td>{c.name}</td><td>{c.area}</td><td>{c.activity}</td><td><span className={"pill "+(c.status==="Active"?"pGood":"pWarn")}>{c.status}</span></td><td>{c.production}</td></tr>)}</tbody>
        </table></div>
      </section>

      <section className="two">
        <div className="panel">
          <div className="panelHead"><h2>Attention Required</h2><span>Risks / issues / constraints</span></div>
          {attention.map((a,i)=><div className="attention" key={i}>
            <span className={"dot "+a.level.toLowerCase()}></span>
            <div><b>{a.item}</b><small>{a.location} • Owner: {a.owner}</small></div>
            <span className="muted">{a.status}</span>
          </div>)}
        </div>

        <div className="panel">
          <div className="panelHead"><h2>Daily PM Brief</h2><span>Auto-summary preview</span></div>
          <p className="brief">Four crews are active across three FTTH work areas. Daily production is at 87% of target. Utility congestion remains the primary schedule constraint. One critical field issue requires bore-path verification. Six QC items remain open, with two awaiting verification. No safety incidents reported.</p>
          <button>Generate Daily Report</button>
        </div>
      </section>

      <section className="two">
        <div className="panel">
          <div className="panelHead"><h2>Risk Register</h2><span>Future uncertainty</span></div>
          {risks.map(r=><div className="register" key={r.id}><b>{r.id}</b><div><strong>{r.description}</strong><small>{r.probability} probability • {r.impact} impact • {r.response} • Owner: {r.owner}</small></div></div>)}
        </div>
        <div className="panel">
          <div className="panelHead"><h2>Issue Log</h2><span>Known problems</span></div>
          {issues.map(r=><div className="register" key={r.id}><b>{r.id}</b><div><strong>{r.description}</strong><small>{r.priority} • Owner: {r.owner} • {r.action}</small></div></div>)}
        </div>
      </section>

      <footer>Telecom PM Field Hub • Prototype v0.1 • Demo data</footer>
    </main>
  );
}
