import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "../layouts/AuthLayout";
import Field from "../components/auth/Field";

/**
 * onSubmit({ email, password }) -> Promise. Throw to show the error banner.
 * TODO: replace the default with the real login call once the API service exists.
 */
export default function Login({ onSubmit }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState("");

  const set = (key) => (event) =>
    setForm((f) => ({ ...f, [key]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Enter your password.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setBusy(true);
    setServerError("");
    try {
      const values = { email: form.email.trim(), password: form.password };
      if (onSubmit) await onSubmit(values);
      else navigate("/dashboard"); // placeholder until auth API is connected
    } catch (err) {
      setServerError(err?.response?.data?.message || err.message || "Couldn’t log you in. Check your details and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to see your wallets, dues and forecast."
      footer={<>New to BatuwaLedger? <Link to="/signup">Create an account</Link></>}
    >
      <form onSubmit={handleSubmit} noValidate>
        {serverError && <div className="auth__banner" role="alert">{serverError}</div>}
        <Field id="email" label="Email" icon={Mail} type="email" autoComplete="email"
          placeholder="you@example.com" value={form.email} onChange={set("email")} error={errors.email} />
        <Field id="password" label="Password" icon={Lock} type="password" autoComplete="current-password"
          placeholder="Your password" value={form.password} onChange={set("password")} error={errors.password} />
        <button className="btn btn-primary auth__submit" disabled={busy}>
          {busy ? "Logging in…" : <>Log in <ArrowRight size={17} aria-hidden="true" /></>}
        </button>
      </form>
    </AuthLayout>
  );
}
