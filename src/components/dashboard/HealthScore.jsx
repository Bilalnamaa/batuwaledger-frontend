import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const R = 42;
const C = 2 * Math.PI * R;

export default function HealthScore({ data }) {
  return (
    <div className="panel" style={{ gridArea: "health" }}>
      <div className="panel__head">
        <h2 className="panel__title">Health Score</h2>
        <span className="badge">{data.label}</span>
      </div>

      <div className="health">
        <div className="ring" role="img" aria-label={`Health score ${data.score} out of 100`}>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <circle cx="50" cy="50" r={R} fill="none" stroke="var(--mint-100)" strokeWidth="10" />
            <circle
              cx="50" cy="50" r={R} fill="none" stroke="var(--emerald-600)" strokeWidth="10"
              strokeLinecap="round" strokeDasharray={`${(C * data.score) / 100} ${C}`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="ring__label"><strong>{data.score}</strong><span>of 100</span></div>
        </div>

        <div className="health__parts">
          {data.parts.map((p) => (
            <div key={p.name}>
              <div className="health__row"><span>{p.name} · {p.weight}%</span><strong>{p.value}</strong></div>
              <div className="bar"><i className={`bar__fill bar__fill--${p.tone}`} style={{ width: `${p.value}%` }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="health__foot">
        <span><Sparkles size={14} aria-hidden="true" /> {data.insight}</span>
        <Link to="/what-if" className="link-sm">Try what-if</Link>
      </div>
    </div>
  );
}
