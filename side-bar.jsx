import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdDocument } from "react-icons/io";
import { RiPassPendingLine } from "react-icons/ri";
import { FaChartBar, FaHome, FaUser, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between h-screen fixed left-0 top-0">
      <div>
        <div className="mb-10 text-2xl font-bold text-green-400 hover:text-green-300">
          POS Dashboard
        </div>

        <nav className="space-y-4">
          <div
            className="flex items-center gap-3 cursor-pointer hover:text-green-400"
            onClick={() => navigate("/admin/dashboard")}
          >
            <FaHome /> Dashboard
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer hover:text-green-400"
            onClick={() => navigate("/admin/dashboard")}
          >
            <RiPassPendingLine /> Pending Requests
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-green-400">
            <FaChartBar /> Chart
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-green-400">
            <IoMdDocument /> Form
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-green-400">
            <FaUser /> Profile
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:text-green-400">
            <FaCog /> Settings
          </div>
        </nav>
      </div>

      <button
        onClick={() => navigate("/admin")}
        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 mt-6"
      >
        Sign Out
      </button>
    </div>
  );
}
