import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to take control of your money?</h2>
        <p>Create your account and start tracking in minutes.</p>
        <Link to="/signup" className="btn btn-light">Create your account</Link>
      </div>
    </section>
  );
}