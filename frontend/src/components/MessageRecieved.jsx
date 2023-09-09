import React from "react";

const MessageRecieved = () => {
  return (
    <div className="w-full">
      <div className="p-2 flex items-center">
         <div className="w-10 h-10 rounded-full overflow-hidden  flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="h-full w-full object-cover "
              alt=""
            />
            </div>
        <div className="bg-white w-auto inline-block m-2 px-3 py-2 max-w-[480px] rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis magnam voluptates? Itaque atque eum soluta est beatae maiores
        </div>
      </div>
    </div>
  );
};

export default MessageRecieved;
