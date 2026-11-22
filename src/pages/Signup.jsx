import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "../layouts/AuthLayout";
import Field from "../components/auth/Field";
import PasswordStrength from "../components/auth/PasswordStrength";
import { scorePassword } from "../components/auth/passwordScore";

/**
 * onSubmit({ name, email, password }) -> Promise. Throw to show the error banner.
 * TODO: replace the default with the real sign-up call once the API service exists.
 */
export default function Signup({ onSubmit }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState("");

  const set = (key) => (event) =>
    setForm((f) => ({ ...f, [key]: event.target.value }));

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.password.length < 8 || scorePassword(form.password) < 2) {
      next.password = "Use at least 8 characters with a mix of letters and numbers.";
    }
    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setBusy(true);
    setServerError("");
    try {
      const values = { name: form.name.trim(), email: form.email.trim(), password: form.password };
      if (onSubmit) await onSubmit(values);
      else navigate("/dashboard"); // placeholder until auth API is connected
    } catch (err) {
      setServerError(err?.response?.data?.message || err.message || "Couldn’t create your account. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Free forever. No SMS or call-log permissions — ever."
      footer={<>Already have an account? <Link to="/login">Log in</Link></>}
    >
      <form onSubmit={handleSubmit} noValidate>
        {serverError && <div className="auth__banner" role="alert">{serverError}</div>}
        <Field id="name" label="Full name" icon={User} autoComplete="name"
          placeholder="Your full name" value={form.name} onChange={set("name")} error={errors.name} />
        <Field id="email" label="Email" icon={Mail} type="email" autoComplete="email"
          placeholder="you@example.com" value={form.email} onChange={set("email")} error={errors.email} />
        <Field id="password" label="Password" icon={Lock} type="password" autoComplete="new-password"
          placeholder="Create a password" value={form.password} onChange={set("password")} error={errors.password} />
        <PasswordStrength password={form.password} />
        <button className="btn btn-primary auth__submit" disabled={busy}>
          {busy ? "Creating account…" : <>Create account <ArrowRight size={17} aria-hidden="true" /></>}
        </button>
      </form>
    </AuthLayout>
  );
}
