import { LineChart, Line, ResponsiveContainer, BarChart, Bar } from "recharts";

const data = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 200, pv: 139 },
  { name: "Mar", uv: 270, pv: 980 },
  { name: "Apr", uv: 400, pv: 390 },
];

const ProgressBars = () => (
  <div className="grid grid-cols-2 gap-6">
    <div className="bg-white p-4 rounded shadow">
      <div className="mb-4 text-gray-500 font-semibold">Recent Metrics</div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Item 1</span>
          <span>80%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
        <div className="flex justify-between">
          <span>Item 2</span>
          <span>60%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-yellow-500 h-2.5 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="flex justify-between">
          <span>Item 3</span>
          <span>40%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-red-500 h-2.5 rounded-full"
            style={{ width: "40%" }}
          ></div>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded shadow">
      <div className="mb-4 text-gray-500 font-semibold">Performance</div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <Bar dataKey="uv" fill="#00C49F" />
          <Bar dataKey="pv" fill="#FFBB28" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ProgressBars;
