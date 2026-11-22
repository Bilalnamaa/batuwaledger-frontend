import { Link } from "react-router-dom";
import { Plus, TrendingUp } from "lucide-react";
import { rs } from "../../utils/format";

export default function BalanceCard({ wallets, changeThisWeek }) {
  const total = wallets.reduce((sum, w) => sum + w.balance, 0);

  return (
    <div className="balance" style={{ gridArea: "balance" }}>
      <div className="balance__top">
        <span>Combined balance · {wallets.length} wallets</span>
        <Link to="/wallets" className="balance__add">
          <Plus size={15} aria-hidden="true" /> Add wallet
        </Link>
      </div>
      <div className="balance__row">
        <strong className="balance__amount">{rs(total)}</strong>
        <span className="balance__pill">
          <TrendingUp size={13} aria-hidden="true" /> +{rs(changeThisWeek)} this week
        </span>
      </div>
      <div className="balance__wallets">
        {wallets.map(({ id, name, balance, icon: Icon }) => (
          <div key={id}>
            <span><Icon size={14} aria-hidden="true" /> {name}</span>
            <strong>{rs(balance)}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
