import { scorePassword } from "./passwordScore";

const LABELS = ["", "Weak", "Fair", "Good", "Strong"];

export default function PasswordStrength({ password }) {
  if (!password) return null;
  const score = scorePassword(password);
  const tone = score <= 1 ? "weak" : score === 2 ? "fair" : "";

  return (
    <div className="strength" aria-live="polite">
      <div className={`strength__bars ${tone}`}>
        {[1, 2, 3, 4].map((n) => (
          <i key={n} className={n <= score ? "on" : ""} />
        ))}
      </div>
      <span className={`strength__label ${tone}`}>{LABELS[score]}</span>
    </div>
  );
}
