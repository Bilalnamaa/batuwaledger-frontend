import PageHeader from "../components/app/PageHeader";
import { today } from "../data/mockDashboard";

export default function ComingSoon({ title }) {
  return (
    <>
      <PageHeader title={title} subtitle={today} />
      <div className="panel comingsoon">
        <h2>{title} is coming soon</h2>
        <p>This screen is part of a later milestone.</p>
      </div>
    </>
  );
}
