const features = [
  { icon: "✍️", title: "Smart Entry", text: "Type “spent 500 on groceries” and it becomes a transaction. Or import a statement." },
  { icon: "📊", title: "Unified Dashboard", text: "All your wallets and recent activity in one clear view." },
  { icon: "🤝", title: "Udhaar Tracker", text: "Know who owes you and who you owe, with running balances and reminders." },
  { icon: "🔮", title: "Cash-Flow Insights", text: "Get warned before you run short, and see your Financial Health Score." },
];

export default function Features() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Everything you need to understand your money</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}