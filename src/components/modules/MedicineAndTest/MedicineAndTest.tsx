"use client";
import MyTitle from "@/components/common/MyTitle";
import { useState } from "react";
import MedicineList from "./MedicineList";

const MedicineAndTest = () => {
  const [tab, setTab] = useState<"medicineList" | "testList">("medicineList");
  return (
    <div className="space-y-6 gap-3 md:mb-12 mb-6">
      <MyTitle title="Doctor List" />

      <div className="flex gap-3 items-center text-gray-500">
        <button
          onClick={() => setTab("medicineList")}
          className={`border-b border-transparent ${
            tab === "medicineList" && "text-black !border-black"
          }`}
        >
          Medicine List
        </button>
        <button
          onClick={() => setTab("testList")}
          className={`border-b border-transparent ${
            tab === "testList" && "text-black !border-black"
          }`}
        >
          Test List
        </button>
      </div>

      {tab === "medicineList" ? <MedicineList /> : <MedicineList />}
    </div>
  );
};

export default MedicineAndTest;
