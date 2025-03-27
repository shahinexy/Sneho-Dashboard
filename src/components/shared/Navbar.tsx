"use client";
import logo from "../../../public/images/loginregister.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { useGetMeQuery } from "@/redux/features/auth/authApi";
// import { useAppDispatch } from "@/redux/hooks";
// import { logout } from "@/redux/features/auth/authSlice";
// import { removeCookie } from "@/utils/cookies";
import { IoIosNotificationsOutline } from "react-icons/io";
import MyFormWrapper from "../form/MyFormWrapper";
import MyFormInput from "../form/MyFormInput";
import { CiSearch } from "react-icons/ci";
// import { TbAdjustments } from "react-icons/tb";
import { FieldValues } from "react-hook-form";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();
  // const dispatch = useAppDispatch();
  // const { data } = useGetMeQuery(undefined);
  // const router = useRouter();

  // const userData = data?.data;

  const navLinks = [
    {
      path: "/",
      name: "Properties",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/setting",
      name: "Setting",
    },
  ];

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  // handle search
  const handleSearch = (data: FieldValues) => {
    console.log(data);
  };

  // const handleLolgout = () => {
  //   dispatch(logout());
  //   removeCookie("token");
  //   router.push("/login");
  // };

  return (
    <div className="bg-white w-full mb-5 px-5 flex justify-between items-center gap-5 shadow-md shadow-gray-300">
      {/* small device menu */}
      <div className="md:hidden mt-2">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <HiMenuAlt1 className="text-2xl cursor-pointer text-primary" />
          </SheetTrigger>
          <SheetContent side="left" className=" ">
            <SheetHeader>
              <SheetTitle className="text-lg">Navigation</SheetTitle>
            </SheetHeader>

            <nav className="mt-5">
              <ul className="space-y-2 flex flex-col z-40">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={`${link.path}`}
                    className={`${
                      pathName === `${link.path}`
                        ? "bg-primary text-black px-5 py-2 rounded-3xl"
                        : "text-black"
                    } hover:bg-primary hover:text-black px-5 py-2 rounded-3xl duration-300`}
                    onClick={handleNavLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </nav>
            <SheetClose asChild>
              <Button variant="outline" className="mt-5 w-full bg-primary">
                Close
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-5 items-center">
        <Image
          src={logo}
          height={120}
          width={300}
          alt="logo"
          className="md:w-52 w-28"
        />

        <div className={`${pathName !== "/" ? "hidden pt-3" : "pt-3"}`}>
          <MyFormWrapper onSubmit={handleSearch}>
            <div className="relative">
              <MyFormInput
                name="search"
                type="text"
                inputClassName="rounded-full px-10"
                placeholder="Search property"
              />
              <CiSearch className="absolute top-3 left-3 text-2xl" />
            </div>
          </MyFormWrapper>
        </div>
      </div>

      {/* larg device menu  */}
      <div className="md:flex hidden items-center gap-7 ">
        <ul className="lg:space-x-5 space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={`${link.path}`}
              className={`${
                pathName === `${link.path}`
                  ? "bg-secondary text-primary px-5 py-2 rounded-3xl"
                  : "text-black"
              } hover:bg-secondary hover:text-primary px-5 py-2 rounded-3xl duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="">
          <IoIosNotificationsOutline className="text-2xl" />
        </div>
      </div>

      {/* {userData ? (
        <div className="flex gap-3">
          <div className=" flex gap-2 items-center md:px-4 px-2 md:py-2 py-[2px] rounded-full bg-white">
            {userData?.profileImage ? (
              <Image
                src={userData?.profileImage}
                height={1000}
                width={1000}
                alt="profile"
              />
            ) : (
              <FaRegUserCircle className="md:text-4xl text-2xl rounded-full" />
            )}
            <div className="">
              <p className="text-sm">{userData?.fullName}</p>
              <p className="font-medium text-sm">{userData?.role}</p>
            </div>
          </div>
          <button
            onClick={handleLolgout}
            className="bg-primary px-8 py-3 rounded-full hover:bg-white duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href={"/login"}>
          <button className="bg-primary px-8 py-3 rounded-full hover:bg-white duration-300">
            Login
          </button>
        </Link>
      )} */}
    </div>
  );
};

export default Navbar;
