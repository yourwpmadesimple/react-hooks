import React from "react";
import Navigation from "../navigation/navigation";

function Expenses() {
  return (
    <div>
      <h2 className='text-center text-5xl my-4'>Expenses</h2>
      <nav
        className="flex sm:justify-center space-x-4"
      >
        <Navigation />
      </nav>
    </div>
  );
}

export default Expenses