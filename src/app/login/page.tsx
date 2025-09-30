import LoginForm from "@/components/modules/Auth/LoginForm";

import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto  h-screen flex justify-center items-center">
      <div className="w-full flex flex-col gap-12 items-center bg-primary/10 md:p-16 p-4 rounded-lg border border-white/50">
        <Image src={"/placeholders/image_placeholder.png"} alt="EOL" height={200} width={200} className="w-32 h-32"/> 
        <h1 className="text-3xl text-primary font-medium text-center">
          {`Hey there, Super Admin! We're excited to have you back. Let's get you
          logged in!`}
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
