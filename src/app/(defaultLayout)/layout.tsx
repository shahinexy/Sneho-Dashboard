import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full">
        <Header />
        <div className="bg-[#f6f6f6] md:px-5 px-3">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default CommonLayout;
