import PageHeader from "../components/app/PageHeader";
import BalanceCard from "../components/dashboard/BalanceCard";
import WeekSummary from "../components/dashboard/WeekSummary";
import RecentActivity from "../components/dashboard/RecentActivity";
import HealthScore from "../components/dashboard/HealthScore";
import ComingUp from "../components/dashboard/ComingUp";
import SpendingByCategory from "../components/dashboard/SpendingByCategory";
import {
  user, today, wallets, balanceChangeThisWeek, weekSummary,
  recentActivity, healthScore, comingUp, spendingByCategory,
} from "../data/mockDashboard";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard" subtitle={`Assalam o Alaikum, ${user.name} — ${today}`} />
      <div className="dash">
        <BalanceCard wallets={wallets} changeThisWeek={balanceChangeThisWeek} />
        <HealthScore data={healthScore} />
        <WeekSummary data={weekSummary} />
        <ComingUp items={comingUp} />
        <RecentActivity items={recentActivity} />
        <SpendingByCategory data={spendingByCategory} />
      </div>
    </>
  );
}
