import { Link } from "react-router-dom";
import { signedRs } from "../../utils/format";

export default function ComingUp({ items }) {
  return (
    <div className="panel" style={{ gridArea: "coming" }}>
      <div className="panel__head">
        <h2 className="panel__title">Coming up</h2>
        <Link to="/forecast" className="link-sm">Forecast</Link>
      </div>
      <ul className="list list--compact">
        {items.map(({ id, title, note, amount, icon: Icon }) => (
          <li key={id} className="list__row">
            <span className="tile tile--sm"><Icon size={16} aria-hidden="true" /></span>
            <div className="list__main">
              <strong>{title}</strong>
              <span>{note}</span>
            </div>
            <strong className={`amount${amount > 0 ? " amount--in" : ""}`}>{signedRs(amount)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
