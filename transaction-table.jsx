import React from "react";

const transactions = [
  { id: 1, customer: "John Doe", amount: "$120", date: "2025-08-06" },
  { id: 2, customer: "Jane Smith", amount: "$75", date: "2025-08-05" },
  { id: 3, customer: "Alice", amount: "$180", date: "2025-08-04" },
];

export default function TransactionTable() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="mb-4 font-medium">Recent Transactions</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Customer</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-t">
              <td className="py-2">{tx.customer}</td>
              <td className="py-2">{tx.amount}</td>
              <td className="py-2">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
