"use client";
import React from "react";
import "./table.css"; // the CSS below

export default function ResponsiveTable() {
  return (
    <div className="table-wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Service</th>
            <th>Details</th>
            <th>Price</th>
            <th>Time</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Cleaning</td>
            <td>Deep Clean</td>
            <td>$120</td>
            <td>08:00</td>
            <td>2025-09-30</td>
            <td>Pending</td>
            <td><button>Pay</button></td>
          </tr>
          <tr>
            <td>002</td>
            <td>Maintenance</td>
            <td>AC Service</td>
            <td>$150</td>
            <td>10:00</td>
            <td>2025-10-02</td>
            <td>Confirmed</td>
            <td><button>Pay</button></td>
          </tr>
          {/* more rows… */}
        </tbody>
      </table>
    </div>
  );
}
