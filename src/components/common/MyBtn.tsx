import React from "react";

const MyBtn = ({
  name,
  width = "w-auto",
}: {
  name: string;
  width?: string;
}) => {
  return (
    <button
      className={`px-4 py-3 bg-gradient-to-r from-secondary to-primary hover:from-blue-600 hover:to-purple-700 transition-all text-white rounded-lg duration-300 ${width}`}
    >
      {name}
    </button>
  );
};

export default MyBtn;
