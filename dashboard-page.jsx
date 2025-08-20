

import Sidebar from "../components/dashboard/side-bar";
import Topbar from "../components/dashboard/top-bar";
import ChartCard from "../components/dashboard/chart-card";
import ProgressBars from "../components/dashboard/progress-bars";
import TransactionTable from "../components/dashboard/transaction-table";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 flex-1 min-h-screen p-6 space-y-6 bg-gray-100">
        <Topbar />

        <ChartCard />

        <ProgressBars />

        <TransactionTable />
      </div>
    </div>
  );
}
