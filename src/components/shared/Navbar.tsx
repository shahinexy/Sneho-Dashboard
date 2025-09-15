"use client";
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
// import { TbAdjustments } from "react-icons/tb";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();
  // const dispatch = useAppDispatch();
  // const { data } = useGetMeQuery(undefined);
  // const router = useRouter();

  // const userData = data?.data;

  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Doctor Appointment",
      url: "/doctor-appointment",
    },
    {
      title: "Doctor List",
      url: "/doctor-list",
    },
    {
      title: "Medicine & Test",
      url: "/medicine-and-test",
    },
    {
      title: "Plan To Conceive",
      url: "/plan-to-conceive",
    },
    {
      title: "Pregnant",
      url: "/pregnant",
    },
    {
      title: "Parents",
      url: "/parents",
    },
    {
      title: "Doctor Only",
      url: "/doctor-only",
    },
    {
      title: "Payment",
      url: "/payment",
    },
    {
      title: "Setting",
      url: "/setting",
    },
  ];

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  // const handleLolgout = () => {
  //   dispatch(logout());
  //   removeCookie("token");
  //   router.push("/login");
  // };

  return (
    <div>
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
              <ul className="space-y-1 flex flex-col z-40">
                {navLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={`${link.url}`}
                    className={`${
                      pathName === `${link.url}`
                        ? "bg-primary text-white px-5 py-2 rounded-xl"
                        : "text-black"
                    } hover:bg-primary hover:text-white px-5 py-2 rounded-xl duration-300`}
                    onClick={handleNavLinkClick}
                  >
                    {link.title}
                  </Link>
                ))}
              </ul>
            </nav>
            <SheetClose asChild>
              <Button variant="outline" className="mt-5 w-full bg-primary text-white">
                Close
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
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
