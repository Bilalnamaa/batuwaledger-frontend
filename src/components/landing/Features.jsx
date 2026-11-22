import { PenLine, LayoutDashboard, Users, TrendingUp } from "lucide-react";

const features = [
  { icon: PenLine, title: "Smart Entry", text: "Type “spent 500 on groceries” and it becomes a transaction. Or import a statement." },
  { icon: LayoutDashboard, title: "Unified Dashboard", text: "All your wallets and recent activity in one clear view." },
  { icon: Users, title: "Udhaar Tracker", text: "Know who owes you and who you owe, with running balances and reminders." },
  { icon: TrendingUp, title: "Cash-Flow Insights", text: "Get warned before you run short, and see your Financial Health Score." },
];

export default function Features() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Everything you need to understand your money</h2>
        <div className="features-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card">
              <div className="feature-icon">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
