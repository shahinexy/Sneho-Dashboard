import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className=" max-w-[922px] bg-white md:p-12 p-5 md:rounded-3xl rounded-2xl border-[3px] border-white text-center md:space-y-7 space-y-4">
        <div className="text-center">
          <h1 className="md:text-5xl text-2xl font-medium md:mb-4 mb-2">
            Password
          </h1>
          <p className="text-lg text-[#475569]">
            Give me correct password and change password
          </p>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-center md:gap-3 gap-12">
          <div className="w-full">
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
