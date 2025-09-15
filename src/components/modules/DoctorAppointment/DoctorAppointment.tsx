"use client"
import MyTitle from "@/components/common/MyTitle";
import { useState } from "react";
import InstantCall from "./InstantCall";
import BookingAppointment from "./BookingAppointment";

const DoctorAppointment = () => {
  const [tab, setTab] = useState<"call" | "appointment">("call");
  return (
    <div className="space-y-6 gap-3 md:mb-12 mb-6">
      <MyTitle title="Appointment" />

      <div className="flex gap-3 items-center text-gray-500">
        <button
          onClick={() => setTab("call")}
          className={` ${
            tab === "call" && "text-black border-b border-black"
          }`}
        >
          Instant Call
        </button>
        <button
          onClick={() => setTab("appointment")}
          className={`${
            tab === "appointment" && "text-black border-b border-black"
          }`}
        >
          Booking Appointment
        </button>
      </div>

      {tab === "call" ? <InstantCall /> : <BookingAppointment />}
    </div>
  );
};

export default DoctorAppointment;
