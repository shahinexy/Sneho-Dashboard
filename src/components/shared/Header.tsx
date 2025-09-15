"use client";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  const { data } = useGetMeQuery(undefined);
  const userData = data?.data;

  return (
    <div className="w-full bg-white flex justify-between gap-5 py-3 items-center border-b border-white/50 md:px-5 px-3 mb-5">
      <Navbar />
      <div className="">
        <h1 className="md:text-2xl text-xl font-semibold text-primary">
          Dashboard
        </h1>
      </div>

      <div className="flex gap-2 items-center">
        <div className="text-end">
          <p className="md:text-lg font-medium">
            {userData?.fullName || "Unknown"}
          </p>
          <p className="text-sm">{userData?.role || "ADMIN"}</p>
        </div>
        <Link href={"/setting"}>
          <Image
            src={userData?.profileImage || "/images/logo.png"}
            height={120}
            width={300}
            alt="logo"
            className="md:w-12 w-9 h-12 h-9 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
