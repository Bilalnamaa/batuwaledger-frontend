const steps = [
  { title: "Add your transactions", text: "Type it, fill a quick form, or import a statement." },
  { title: "See it all together", text: "Your dashboard combines every wallet and every udhaar." },
  { title: "Get clear guidance", text: "Plain-language insights based on your own numbers." },
];

export default function HowItWorks() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.title}>
              <div className="step-number">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}