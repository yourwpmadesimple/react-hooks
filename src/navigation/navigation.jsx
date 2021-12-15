import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link
        className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900"
        to="/">Home</Link>
      <Link
        className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900"
        to="/invoices">Invoices</Link>
      <Link
        className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900"
        to="/expenses">Expenses</Link>
    </div>
  )
}

export default Navigation