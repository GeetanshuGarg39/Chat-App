import React from "react";
import Image from "../../assets/settings.jpeg";

const Settings = () => {
  return (
    <div class="w-full flex">
      <div class="h-full w-[350px] bg-slate-100 overflow-y-auto scrollbar-hide">
        <div class="flex flex-col p-6 space-y-8">
          <div class="flex text-2xl items-center gap-3">
            <i class="ph ph-caret-left"></i>
            <h1 class=" font-medium text-xl ">Settings</h1>
          </div>

          <div class="flex gap-3  items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden ">
              <img
                width="100"
                height="100"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div class="flex flex-col ">
              <h3>Shubham Kohli</h3>
              <h3 class="font-light">example.com</h3>
            </div>
          </div>

          <div class="flex flex-col gap-4 ">
            <div class="flex flex-col">
              <div class="flex items-center gap-3 hover:bg-blue-100 rounded-md p-2 transition-all ease-linear hover:scale-110">
                <i class="ph ph-user text-2xl"></i>
                <h3>My Account</h3>
              </div>
              <div class="border border-slate-200"></div>
            </div>

            <div class="flex flex-col ">
              <div class="flex items-center gap-3 hover:bg-blue-100 rounded-md p-2 transition-all ease-linear hover:scale-110">
                <i class="ph ph-bell text-2xl"></i>
                <h3>Notifications</h3>
              </div>
              <div class="border border-slate-200"></div>
            </div>

            <div class="flex flex-col ">
              <div class="flex items-center gap-3 hover:bg-blue-100 rounded-md p-2 transition-all ease-linear hover:scale-110">
                <i class="ph ph-lock text-2xl"></i>
                <h3>Privacy</h3>
              </div>
              <div class="border border-slate-200"></div>
            </div>

            <div class="flex flex-col">
              <div class="flex items-center gap-3 hover:bg-blue-100 rounded-md p-2 transition-all ease-linear hover:scale-110">
                <i class="ph ph-info text-2xl"></i>
                <h3>Help</h3>
              </div>
              <div class="border border-slate-200"></div>
            </div>
          </div>
        </div>
      </div>


      <div class="h-full w-full flex items-center justify-center">
        <img src={Image} alt="" class="h-[300px] "/>
      </div>
    </div>
  );
};

export default Settings;
