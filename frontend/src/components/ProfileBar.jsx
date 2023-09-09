import React from "react";

export const ProfileBar = () => {
  return (
    <div class="h-[100vh] bg-slate-100 w-1/5 overflow-y-scroll scrollbar-hide">
      <div class="flex items-center justify-between h-24 p-6">
        <h1 class="font-bold text-xl">Profile Details</h1>
        <button class="flex justify-end">
          <i class="ph ph-x text-xl"></i>
        </button>
      </div>
      <div class="flex flex-col p-6">
        <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
          <img
            width="100"
            height="100"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div class="flex flex-col items-center mb-4">
          <h1 class="text-lg font-medium">Shubham Kohli</h1>
        </div>
        <div class="flex items-center justify-center gap-4">
          <button class="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border border-blue-700 ">
            <i class="ph ph-phone-call text-2xl text-blue-700 "></i>
          </button>
          <button class="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border bg-blue-500 hover:bg-blue-700">
            <i class="ph ph-video-camera text-2xl text-white"></i>
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-4 p-6 border">
        <h3 class="flex items-center justify-between ">
          <span class="font-medium ">User Information</span>{" "}
          <button>
            <i class="ph ph-info text-xl "></i>
          </button>
        </h3>
        <p class="flex flex-col">
          <span class="font-medium ">About</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </p>
        <p class="flex flex-col">
          <span class="font-medium ">Email</span>
          <span>example@gmail.com</span>
        </p>
      </div>
      <div class="flex flex-col gap-4 p-6 border">
        <h3 class="flex items-center justify-between ">
          <span class="font-medium ">Media, Links & Docs</span>{" "}
          <button>
            <i class="ph ph-arrow-right text-xl"></i>
          </button>
        </h3>
        <div class="grid grid-cols-3 gap-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1666345068000-f11cb42d964f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            width={88}
            height={88}
            class="w-full"
            alt=""
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1666345068000-f11cb42d964f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            width={88}
            height={88}
            class="w-full"
            alt=""
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1666345068000-f11cb42d964f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            width={88}
            height={88}
            class="w-full"
            alt=""
          />
        </div>
      </div>
      <div class="p-6 gap-4 flex flex-col">
        <h3 class="flex items-center justify-between">
          <span class="font-medium ">Groups in Common</span>
        </h3>
        <div class="flex items-center gap-4 hover:bg-blue-100 hover:p-2 hover:font-semibold rounded-2xl transition-all">
          <div class="w-12 h-12 rounded-full overflow-hidden  flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              class="h-full w-full object-cover "
              alt=""
            />
          </div>
          <h3 class="">Developers</h3>
          
        </div>
        <div class="flex items-center gap-4 ">
          <div class="w-12 h-12 rounded-full overflow-hidden  flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              class="h-full w-full object-cover "
              alt=""
            />
          </div>
          <h3 class="">Developers</h3>
          
        </div>
        <div class="flex items-center gap-4 ">
          <div class="w-12 h-12 rounded-full overflow-hidden  flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              class="h-full w-full object-cover "
              alt=""
            />
          </div>
          <h3 class="">Developers</h3>
          
        </div>
      </div>
    </div>
  );
};
