import React from "react";

import "./style.scss";

export default function SkeltonDropdown() {
  return (
    <div className="mb-11 last:mb-0">
      {/* <div className="skeleton mb-5 h-[2rem] w-[17rem] rounded-3xl"></div> */}

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
        <div className="skeleton h-[3rem] w-full rounded-lg"></div>
      </div>
    </div>
  );
}
