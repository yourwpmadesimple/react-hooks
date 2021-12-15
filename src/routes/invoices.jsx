import React from "react";
import Navigation from "../navigation/navigation";

function Invoices() {
  return (
    <div>
      <h1 className='text-center text-5xl my-4'>Invoices</h1>
      <nav
        className="flex sm:justify-center space-x-4"
      >
        <Navigation />
      </nav>
    </div>
  );
}

export default Invoices