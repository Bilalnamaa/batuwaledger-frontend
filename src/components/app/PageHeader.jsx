import { Sparkles, Bell } from "lucide-react";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="pageheader">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="pageheader__tools">
        {/* TODO: open the Quick add modal (SDD screen 04) on submit */}
        <form className="quickadd" role="search" onSubmit={(e) => e.preventDefault()}>
          <Sparkles size={17} aria-hidden="true" />
          <input type="text" placeholder="Quick add — try “spent 500 on groceries”" aria-label="Quick add" />
          <kbd>Enter</kbd>
        </form>
        <button type="button" className="iconbtn" aria-label="Notifications">
          <Bell size={18} />
          <i className="iconbtn__dot" />
        </button>
      </div>
    </div>
  );
}
