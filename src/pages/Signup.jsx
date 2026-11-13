import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="signup-title">
        <Link to="/" className="auth-back">
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <div className="auth-heading">
          <Link to="/" className="auth-logo" aria-label="BatuwaLedger home">
            <span className="logo-mark">B</span>
            <span>BatuwaLedger</span>
          </Link>
          <p className="auth-eyebrow">Create your account</p>
          <h1 id="signup-title">Start managing your ledger</h1>
          <p>Join BatuwaLedger and keep your financial records organized in one place.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="full-name">Full name</label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            minLength="8"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Repeat your password"
            autoComplete="new-password"
            minLength="8"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <label className="auth-checkbox">
            <input type="checkbox" name="terms" required />
            <span>
              I agree to the <a href="#terms">Terms of Service</a> and{" "}
              <a href="#privacy">Privacy Policy</a>.
            </span>
          </label>

          <button type="submit" className="btn btn-primary auth-submit">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}