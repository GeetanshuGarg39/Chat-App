import React from "react";
import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";

const Chat = () => {
  return (
    <>
        <div className="w-full h-screen">
          <div className="h-[8%] py-2 px-4 flex justify-between ">
            <div className="h-[100%] flex items-center ">
              <button className="w-10 h-10 overflow-hidden rounded-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2mXZyjeEgVKZ4yOV5SS2dL5UC10y0RRCew&usqp=CAU"
                  alt="profile"
                />{" "}
              </button>

              <div className="flex flex-col px-2">
                <div>UserName</div>
                <div>Online</div>
              </div>
            </div>
            <div className="flex">
              <button className="mx-2 flex items-center justify-center ">
                <i className="ph ph-phone-call text-2xl"></i>
              </button>
              <button className="mx-2 flex items-center justify-center">
                <i className="ph ph-video-camera text-2xl"></i>
              </button>
            </div>
          </div>
          <div className="w-full h-[85%] mb-2 bg-slate-100 overflow-y-scroll ">
            <MessageRecieved />
            <MessageRecieved />
            <MessageSent />
            <MessageSent />
            <MessageRecieved />
            <MessageRecieved />
            <MessageRecieved />
            <MessageSent />
            <MessageSent />
          </div>
          <div className=" w-full flex px-1 items-center">
            <button className="m-1 text-2xl bg-blue-500 text-white h-10 w-10 rounded-full overflow-hidden">
              <i className="ph ph-plus font-black h-full w-full object-cover"></i>
            </button>
            <input
              className="bg-blue-100 text-blue-700 w-full h-10 p-2 rounded-lg focus:outline-none"
              type="text"
              placeholder="Write a message.."
            />
            <button className="ml-1 mr-2 w-10 h-10 overflow-hidden ">
              <i className="ph ph-paper-plane-right text-2xl w-full h-full font-extrabold text-blue-700 "></i>
            </button>
          </div>
        </div>

    </>
  );
};

export default Chat;
