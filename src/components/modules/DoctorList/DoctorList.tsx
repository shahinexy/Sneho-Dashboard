"use client"
import MyTitle from "@/components/common/MyTitle";
import { useState } from "react";
import PendingDoctor from "./PendingDoctor";
import ApprovedDoctor from "./ApprovedDoctor";

const DoctorList = () => {
  const [tab, setTab] = useState<"approved" | "Pending">("approved");
  return (
    <div className="space-y-6 gap-3 md:mb-12 mb-6">
      <MyTitle title="Doctor List" />

      <div className="flex gap-3 items-center text-gray-500">
        <button
          onClick={() => setTab("approved")}
          className={` ${
            tab === "approved" && "text-black border-b border-black"
          }`}
        >
          Approved Doctor
        </button>
        <button
          onClick={() => setTab("Pending")}
          className={`${
            tab === "Pending" && "text-black border-b border-black"
          }`}
        >
          Pending Doctor
        </button>
      </div>

      {tab === "approved" ? <ApprovedDoctor /> : <PendingDoctor />}
    </div>
  );
};

export default DoctorList;
