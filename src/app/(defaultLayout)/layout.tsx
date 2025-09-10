import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneho",
  description: "",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full">
        <Header />
        <div className="md:px-5 px-3">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default CommonLayout;
