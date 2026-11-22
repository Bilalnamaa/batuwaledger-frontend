import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

// Sample figures from the SDD mockups, replace with a real screenshot later
const wallets = [
  { name: "JazzCash", amount: "Rs. 12,480" },
  { name: "EasyPaisa", amount: "Rs. 8,770" },
  { name: "HBL Bank", amount: "Rs. 24,000" },
  { name: "Cash", amount: "Rs. 3,000" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h1>
            Every rupee.
            <br />
            Every wallet.
            <br />
            <span>One trusted ledger.</span>
          </h1>
          <p>
            Bring your JazzCash, EasyPaisa, bank and cash together, keep a clear
            record of udhaar, and see where your month is heading. Our AI
            explains your numbers but never calculates them.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-lime">Get started</Link>
            <Link to="/login" className="btn btn-ghost">I already have an account</Link>
          </div>
        </div>

        <div className="hero-preview">
          <div className="hero-preview__top">
            <span>Combined balance · 4 wallets</span>
            <span className="hero-preview__pill">+Rs. 8,560 this week</span>
          </div>
          <div className="hero-preview__amount">Rs. 48,250</div>
          <div className="hero-preview__wallets">
            {wallets.map((w) => (
              <div key={w.name}>
                <span>{w.name}</span>
                <strong>{w.amount}</strong>
              </div>
            ))}
          </div>
          <div className="hero-preview__foot">
            <span>Health score <strong>72</strong> / 100</span>
            <span className="hero-preview__verified">
              <ShieldCheck size={15} aria-hidden="true" /> All figures verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
