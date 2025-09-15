"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Settings,
  LayoutDashboardIcon,
  MonitorCheck,
  Pill,
  Lightbulb,
  Hourglass,
  Users,
  BriefcaseMedical,
  BadgeDollarSign,
  ClipboardPlus,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { removeCookie } from "@/utils/cookies";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Doctor Appointment",
    url: "/doctor-appointment",
    icon: MonitorCheck,
  },
  {
    title: "Doctor List",
    url: "/doctor-list",
    icon: ClipboardPlus,
  },
  {
    title: "Medicine & Test",
    url: "/medicine-and-test",
    icon: Pill,
  },
  {
    title: "Plan To Conceive",
    url: "/plan-to-conceive",
    icon: Lightbulb,
  },
  {
    title: "Pregnant",
    url: "/pregnant",
    icon: Hourglass,
  },
  {
    title: "Parents",
    url: "/parents",
    icon: Users,
  },
  {
    title: "Doctor Only",
    url: "/doctor-only",
    icon: BriefcaseMedical,
  },
  {
    title: "Payment",
    url: "/payment",
    icon: BadgeDollarSign,
  },
  {
    title: "Setting",
    url: "/setting",
    icon: Settings,
  },
];

const SideBar = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    removeCookie("token");
    router.push("/login");
  };
  return (
    <Sidebar>
      <SidebarContent className="!bg-white">
        <SidebarGroup />
        <SidebarGroupLabel className="mb-14 mt-8 mx-auto">
          <Image src={"/images/logo.png"} alt="logo" width={70} height={50} />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 ">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`text-base px-4 py-5 bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:text-white font-medium ${
                    pathName === `${item.url}`
                      ? "bg-gradient-to-r from-secondary to-primary hover:from-blue-600 hover:to-purple-700 transition-all text-white rounded-lg duration-300"
                      : ""
                  }`}
                >
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="!bg-white">
        <button
          onClick={handleLogout}
          className="py-3 border border-primary rounded-lg font-medium text-base"
        >
          Log out
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
