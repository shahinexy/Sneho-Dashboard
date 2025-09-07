"use client";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import logo from "../../assets/placeholders/user-placeholder.jpg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data } = useGetMeQuery(undefined);
  const userData = data?.data;

  return (
    <div className="w-full flex justify-between gap-5 py-3 items-center border-b border-white/50 md:px-5 px-3">
      <div className="">
        <h1 className="text-2xl font-semibold text-primary">
          Dashboard
        </h1>
      </div>

      <div className="flex gap-2 items-center">
        <div className="text-end">
          <p className="text-lg font-medium">{userData?.fullName}</p>
          <p className="text-sm">{userData?.role}</p>
        </div>
        <Link href={"/setting"}>
        <Image
          src={userData?.profileImage || logo}
          height={120}
          width={300}
          alt="logo"
          className="w-12 h-12 rounded-full"
        /></Link>
      </div>
    </div>
  );
};

export default Header;