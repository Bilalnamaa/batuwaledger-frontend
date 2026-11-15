import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Your money, finally in one place.</h1>
          <p>
            Bring your JazzCash, EasyPaisa and cash together, keep a clear
            record of udhaar, and know where your month is heading before it
            gets there.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-outline">I already have an account</Link>
          </div>
        </div>

        {/* Placeholder card with sample data, replace with a real screenshot later */}
        <div className="card">
          <p>Financial Health Score</p>
          <div className="preview-score">78 / 100</div>
          <div className="preview-row"><span>Total balance</span><strong>Rs. 24,500</strong></div>
          <div className="preview-row"><span>Udhaar to receive</span><strong>Rs. 5,000</strong></div>
          <div className="preview-row"><span>Spent this week</span><strong>Rs. 3,200</strong></div>
        </div>
      </div>
    </section>
  );
}