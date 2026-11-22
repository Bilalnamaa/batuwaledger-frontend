import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard, List, Wallet, Upload, Users, LineChart,
  SlidersHorizontal, Sparkles, ShieldCheck, Menu, X,
} from "lucide-react";
import Logo from "../components/Logo";
import { user } from "../data/mockDashboard";
import "../styles/app.css";

const NAV = [
  {
    label: "Overview",
    items: [
      { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { to: "/transactions", label: "Transactions", icon: List },
      { to: "/wallets", label: "Wallets", icon: Wallet },
      { to: "/import", label: "Import statement", icon: Upload },
    ],
  },
  { label: "Udhaar", items: [{ to: "/people", label: "People & dues", icon: Users }] },
  {
    label: "Insights",
    items: [
      { to: "/forecast", label: "Forecast", icon: LineChart },
      { to: "/what-if", label: "What-if", icon: SlidersHorizontal },
      { to: "/ask", label: "Ask BatuwaAI", icon: Sparkles },
    ],
  },
];

export default function AppLayout() {
  // Remember which route the drawer was opened on, so it closes itself after navigating.
  const { pathname } = useLocation();
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;

  return (
    <div className={`app${open ? " app--open" : ""}`}>
      <header className="app__mobilebar">
        <Logo onDark />
        <button
          type="button"
          className="app__menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <aside className="sidebar" id="sidebar">
        <div className="sidebar__logo"><Logo onDark /></div>

        <nav className="sidebar__nav" aria-label="Main">
          {NAV.map((group) => (
            <div key={group.label} className="sidebar__group">
              <p className="sidebar__label">{group.label}</p>
              {group.items.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} className="sidebar__link">
                  <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  {label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar__trust">
          <strong><ShieldCheck size={14} aria-hidden="true" /> Numbers you can trust</strong>
          <p>Every figure is computed by BatuwaLedger. AI only explains it.</p>
        </div>

        <div className="sidebar__user">
          <span className="sidebar__avatar">{user.name[0]}</span>
          <div>
            <strong>{user.name}</strong>
            <span>{user.ledger}</span>
          </div>
        </div>
      </aside>

      {open && <button className="app__backdrop" aria-label="Close menu" onClick={() => setOpenOn(null)} />}

      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
}
