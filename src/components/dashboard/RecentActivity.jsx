import { Link } from "react-router-dom";
import { signedRs } from "../../utils/format";

export default function RecentActivity({ items }) {
  return (
    <div className="panel" style={{ gridArea: "recent" }}>
      <div className="panel__head">
        <h2 className="panel__title">Recent activity</h2>
        <Link to="/transactions" className="link-sm">View all</Link>
      </div>
      <ul className="list">
        {items.map(({ id, title, category, wallet, date, amount, icon: Icon }) => (
          <li key={id} className="list__row">
            <span className="tile"><Icon size={18} aria-hidden="true" /></span>
            <div className="list__main">
              <strong>{title}</strong>
              <span>{category} · {wallet}</span>
            </div>
            <span className="list__date">{date}</span>
            <strong className={`amount${amount > 0 ? " amount--in" : ""}`}>{signedRs(amount)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
