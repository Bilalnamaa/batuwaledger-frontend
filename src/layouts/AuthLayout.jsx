import { Wallet, Users, ShieldCheck, Lock } from "lucide-react";
import Logo from "../components/Logo";
import "../styles/auth.css";

const FEATURES = [
  { icon: Wallet, title: "All your wallets in one place", text: "JazzCash, EasyPaisa, bank and cash — one combined balance." },
  { icon: Users, title: "Udhaar without awkwardness", text: "Track who owes whom, with reminders and shareable summaries." },
  { icon: ShieldCheck, title: "AI that never invents numbers", text: "Figures are computed in code; AI only explains them." },
];

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth">
      <aside className="auth__brand">
        <Logo onDark />

        <div>
          <h1 className="auth__headline">
            Know where every rupee went — <em>and where it’s going.</em>
          </h1>
          <ul className="features">
            {FEATURES.map(({ icon: Icon, title: t, text }) => (
              <li className="feature" key={t}>
                <span className="feature__icon">
                  <Icon size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3>{t}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Sample figures from the SDD mockups */}
        <div className="balance-card">
          <div className="balance-card__row">
            <span>Combined balance</span>
            <span className="balance-card__pill">4 wallets</span>
          </div>
          <div className="balance-card__amount">Rs. 48,250</div>
          <div className="balance-card__bars" aria-hidden="true">
            <i style={{ flex: 12, background: "var(--lime)" }} />
            <i style={{ flex: 9, background: "var(--mint-300)" }} />
            <i style={{ flex: 24, background: "var(--emerald-500)" }} />
            <i style={{ flex: 3, background: "#6f9a8c" }} />
          </div>
        </div>
      </aside>

      <main className="auth__main">
        <div className="auth__form-wrap">
          <div className="auth__mobile-logo">
            <Logo />
          </div>
          <h2 className="auth__title">{title}</h2>
          <p className="auth__sub">{subtitle}</p>
          {children}
          <p className="auth__alt">{footer}</p>
          <p className="auth__secure">
            <Lock size={13} aria-hidden="true" /> Passwords are hashed with bcrypt · HTTPS everywhere
          </p>
        </div>
      </main>
    </div>
  );
}
