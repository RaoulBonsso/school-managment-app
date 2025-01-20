import AttendanceCart from "@/app/components/AttendanceCart";
import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";
import React from "react";

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
          <UserCard type="staff" />
          <UserCard type="staff" />
          
          
          <div className=""></div>
        </div>
        {/*MIDDLE CHARTS */}
        <div className=" flex gap-4 flex-col lg:flex-row">
          {/*COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/*ATTENDANCE CHARTS */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceCart/>
          </div>
        </div>
        {/*BOTTOM CHARTS */}
        <div className=""></div>
      </div>

      {/*RIGHT*/}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default page;
