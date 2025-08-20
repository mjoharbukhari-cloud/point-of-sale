import React from 'react'

export default function Topbar() {
  return (
    <div>
       <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded-md w-1/3"
          />
        </div>
    </div>
  )
}
