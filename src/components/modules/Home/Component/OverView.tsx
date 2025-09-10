/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CalendarCheck } from "lucide-react";

const OverView = () => {
  const overView = [
    {
      id: "01",
      title: "Total Content",
      value: 123,
    },
    {
      id: "01",
      title: "Total User",
      value: 548,
    },
    {
      id: "01",
      title: "Total Doctor",
      value: 60,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
      {overView?.map((item: any) => (
        <div key={item.id} className="bg-white rounded-xl md:p-5 p-2 space-y-4">
          <div className="flex gap-3 items-center">
            <div className={`md:p-2 p-1 rounded-md text-primary bg-gray-100`}>
              <CalendarCheck />
            </div>
            <h3 className="md:text-xl text-base text-primary ">{item?.title}</h3>
          </div>
          <h2 className="md:text-4xl text-2xl font-bold">{item?.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default OverView;
