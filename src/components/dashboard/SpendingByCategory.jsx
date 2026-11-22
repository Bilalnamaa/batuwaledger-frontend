import { useState } from "react";
import { rs } from "../../utils/format";

const R = 42;
const C = 2 * Math.PI * R;

export default function SpendingByCategory({ data }) {
  const [period, setPeriod] = useState("week");
  const items = data[period];
  const total = items.reduce((sum, i) => sum + i.amount, 0);

  const arcs = items.map((item, i) => ({
    ...item,
    len: (item.amount / total) * C,
    offset: items.slice(0, i).reduce((sum, prev) => sum + (prev.amount / total) * C, 0),
  }));

  return (
    <div className="panel" style={{ gridArea: "spending" }}>
      <div className="panel__head">
        <h2 className="panel__title">Spending by category</h2>
        <div className="toggle" role="group" aria-label="Period">
          {["week", "month"].map((p) => (
            <button key={p} type="button" className={period === p ? "on" : ""} aria-pressed={period === p} onClick={() => setPeriod(p)}>
              {p === "week" ? "Week" : "Month"}
            </button>
          ))}
        </div>
      </div>

      <div className="spend">
        <div className="donut" role="img" aria-label={`Spent ${rs(total)}`}>
          <svg viewBox="0 0 100 100" width="150" height="150">
            {arcs.map((a) => (
              <circle
                key={a.name} cx="50" cy="50" r={R} fill="none" stroke={a.color} strokeWidth="13"
                strokeDasharray={`${Math.max(a.len - 1.5, 0)} ${C}`} strokeDashoffset={-a.offset}
                transform="rotate(-90 50 50)"
              />
            ))}
          </svg>
          <div className="donut__label"><span>Spent</span><strong>{rs(total)}</strong></div>
        </div>

        <ul className="legend">
          {items.map((i) => (
            <li key={i.name}>
              <i style={{ background: i.color }} />
              <div><span>{i.name}</span><strong>{rs(i.amount)}</strong></div>
              <em>{Math.round((i.amount / total) * 100)}%</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
