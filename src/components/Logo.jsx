import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ onDark = false }) {
  return (
    <Link
      to="/"
      className={`logo${onDark ? " logo--on-dark" : ""}`}
      aria-label="BatuwaLedger home"
    >
      <span className="logo__mark">
        <Wallet size={20} strokeWidth={2} aria-hidden="true" />
      </span>
      <span>
        Batuwa<b>Ledger</b>
      </span>
    </Link>
  );
}
