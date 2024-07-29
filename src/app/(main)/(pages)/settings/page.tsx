import ProfileForm from "@/components/forms/profile-form";
import React from "react";

type Props = {};
// TODO: Wire Up profile picture
const SettingsPage = (props: Props) => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className=" text-4xl sticky top-0 z-[10] flex items-center justify-between  border-b bg-background/50 p-6 backdrop-blur-lg">
        <span>SettingPage</span>
      </h1>
      <div className=" flex flex-col gap-10 p-6">
        <div>
          <h2 className="  text-2xl font-bold"> User Profile</h2>
          <p className=" text-base text-white/50">
            Add or update your information{" "}
          </p>
        </div>
        <ProfileForm />
      </div>
    </div>
  );
};

export default SettingsPage;
