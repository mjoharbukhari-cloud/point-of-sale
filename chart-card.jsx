import { LineChart, Line, ResponsiveContainer, BarChart, Bar } from "recharts";

const data = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 200, pv: 139 },
  { name: "Mar", uv: 270, pv: 980 },
  { name: "Apr", uv: 400, pv: 390 },
];

const ChartCard = () => (
  <div className="grid grid-cols-3 gap-6">
    <div className="bg-white p-4 rounded shadow">
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#ff7300" strokeWidth={2} />
          <Line type="monotone" dataKey="pv" stroke="#387908" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-white p-4 rounded shadow flex flex-col items-center">
      <div className="text-3xl font-bold text-green-600">65%</div>
      <div className="mt-2 text-sm">Sales Target</div>
    </div>

    <div className="bg-white p-4 rounded shadow">
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ChartCard;
