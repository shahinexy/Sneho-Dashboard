import MyBtn from "@/components/common/MyBtn";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-3">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg text-gray-600">Page not found</p>
      <Link href={"/"}>
      <MyBtn name="Back To Home" />
      </Link>
    </div>
  );
}
