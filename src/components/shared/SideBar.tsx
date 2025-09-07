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
import logo from "@/assets/images/logo.png";
import {
  SquareUser,
  UserRoundX,
  Settings,
  ClipboardMinus,
  LayoutDashboardIcon,
  Contact,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { removeCookie } from "@/utils/cookies";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Report",
    url: "/report",
    icon: ClipboardMinus,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Contact,
  },
  {
    title: "User",
    url: "/user",
    icon: SquareUser,
  },
  {
    title: "Remove",
    url: "/remove",
    icon: UserRoundX,
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
          <Image src={logo} alt="logo" width={70} height={50} />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-4 ">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`px-4 py-5 bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:text-white font-medium ${
                    pathName === `${item.url}`
                      ? "bg-gradient-to-r from-secondary to-primary hover:from-blue-600 hover:to-purple-700 transition-all text-white rounded-lg"
                      : ""
                  }`}
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
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
