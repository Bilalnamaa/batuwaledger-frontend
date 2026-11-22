import { Sparkles, Check } from "lucide-react";
import { rs } from "../../utils/format";

export default function WeekSummary({ data }) {
  return (
    <div className="panel" style={{ gridArea: "week" }}>
      <div className="panel__head">
        <h2 className="panel__title weekhead">
          <span className="tile"><Sparkles size={16} aria-hidden="true" /></span>
          Your week in two lines <small>{data.range}</small>
        </h2>
        <span className="verified">
          <Check size={14} aria-hidden="true" /> All {data.verifiedFigures} figures verified
        </span>
      </div>
      <p className="weektext">
        You spent <b className="em">{rs(data.spent)}</b> this week,{" "}
        <b>{data.changePct}% more</b> than last week. {data.topCategory} was the
        biggest share at <b className="em">{rs(data.topAmount)}</b>, up from{" "}
        {rs(data.topPrevAmount)} — mostly on weekends.
      </p>
    </div>
  );
}
