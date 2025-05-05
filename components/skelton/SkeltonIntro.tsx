import React from "react";
import "./style.scss";
export default function SkeltonIntro() {
  return (
    <div className="container pb-28 pt-14">
      <div className="space-y-5">
        <div className="skeleton mx-auto h-[5rem] w-full max-w-[650px] rounded-xl"></div>
        <div className="skeleton mx-auto mb-5 h-[3.5rem] w-[40%] rounded-3xl"></div>
        <div className="skeleton mx-auto mb-5 h-[27rem] w-full rounded-[2.5rem]"></div>
      </div>
    </div>
  );
}
