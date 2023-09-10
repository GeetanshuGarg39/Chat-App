import React, { useState } from 'react'
import { MsgMenuOptions } from '../../data'

const TextMsg = ({ ele }) => {
  return (
    <div class="py-3">
      <div class={ele.incoming ? "flex" : "flex flex-row-reverse"} >
        {/* <div class="relative w-12 h-12 shrink-0 undefined">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" height="48" width="48" class="w-full h-full rounded-full overflow-hidden object-cover" />
        </div> */}
        <div class={ele.incoming ? "pl-3" : "pr-3"}>
          {/* <div class="flex items-center mb-3">
            <span class="font-bold">Addisyn Buck</span>
            <span class="text-sm text-gray-400 shrink-0 ml-2">5:00 PM</span>
          </div> */}
          <div class="flex flex-col  gap-1 items-start">
            <div class={ele.incoming ? "max-w-md p-4 rounded-2xl overflow-hidden rounded-tl-none bg-slate-100" : "max-w-md p-4 rounded-2xl overflow-hidden rounded-tr-none bg-blue-400 text-slate-100"}>
              {ele.message}
            </div>
            

            {/* <div class="max-w-md p-0 rounded-2xl overflow-hidden false">
              <img class="w-62 h-48" src="https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" width="300" h="400" />
            </div> */}
          </div>
        </div>
        <MsgOptions />
      </div>
    </div>
  )
}

const TimeLine = ({ ele }) => {
  return (
    <div class="relative shrink-0 my-6 h-px bg-gray-200">
      <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block">{ele.text}</span>
    </div>
  )
}

const MediaMsg = ({ ele }) => {
  return (
    <div class="py-3">
      <div class={ele.incoming ? "flex" : "flex flex-row-reverse"} >
        {/* <div class="relative w-12 h-12 shrink-0 undefined">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" height="48" width="48" class="w-full h-full rounded-full overflow-hidden object-cover" />
        </div> */}
        <div class={ele.incoming ? "pl-3" : "pr-3"}>
          {/* <div class="flex items-center mb-3">
            <span class="font-bold">Addisyn Buck</span>
            <span class="text-sm text-gray-400 shrink-0 ml-2">5:00 PM</span>
          </div> */}
          <div class={ele.incoming ? "max-w-md p-2 rounded-2xl overflow-hidden rounded-tl-none bg-slate-100" : "max-w-md p-2 rounded-2xl overflow-hidden rounded-tr-none bg-blue-400 text-slate-100"}>
            <div class="flex flex-col gap-3 items-start">
              <div class="max-w-md p-0 rounded-2xl overflow-hidden false">
                <img class="w-62 h-48" src={ele.img} alt="" width="300" h="400" />
              </div>
              {ele.message}
            </div>
          </div>
        </div>
        <MsgOptions />
      </div>
    </div>
  )

}

const ReplyMsg = ({ ele }) => {
  return (
    <div class="py-3">
      <div class={ele.incoming ? "flex" : "flex flex-row-reverse"} >
        <div class={ele.incoming ? "pl-3" : "pr-3"}>
          <div class={ele.incoming ? "max-w-md p-2 rounded-2xl overflow-hidden rounded-tl-none bg-slate-100" : "max-w-md p-2 rounded-2xl overflow-hidden rounded-tr-none bg-blue-400 text-slate-100"}>
            <div class="flex flex-col">
              <div class="flex flex-col gap-3 items-start bg-white text-black p-2 rounded-2xl">
                {ele.message}
              </div>
              {ele.reply}
            </div>
          </div>
        </div>
        <MsgOptions />
      </div>
    </div>
  )
}

const DocMsg = ({ ele }) => {
  return (
    <div class="py-3">
      <div class={ele.incoming ? "flex" : "flex flex-row-reverse"} >
        <div class={ele.incoming ? "pl-3" : "pr-3"}>
          <div class={ele.incoming ? "max-w-md p-2 rounded-2xl overflow-hidden rounded-tl-none bg-slate-100" : "max-w-md p-2 rounded-2xl overflow-hidden rounded-tr-none bg-blue-400 text-slate-100"}>
            <div class="flex flex-col gap-3">
              <div class="flex gap-3 items-center bg-white text-black p-2 rounded-xl">
                <i class="ph ph-file text-2xl"></i>
                <h3>Dummy.png</h3>
                <button>
                  <i class="ph ph-download-simple text-2xl"></i>
                </button>
              </div>
              <p>{ele.message}</p>
            </div>
          </div>
        </div>
        <MsgOptions />
      </div>
    </div>
  )
}

const MsgOptions = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <div class="relative h-fit w-fit">
        <i class="ph ph-dots-three-vertical text-2xl cursor-pointer" id="menu-msg-options" onClick={handleClick} >
          {openMenu && (

            <div className="z-10 absolute left-5 w-48 rounded-lg shadow-lg bg-slate-50 ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <ul role="menu" aria-orientation="vertical" aria-labelledby="menu-msg-options">
                  {MsgMenuOptions.map((e, i) => (
                    <li key={i} onClick={handleClose}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">{e.title}</a>
                    </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </i>
      </div>
    </>
  )
}

export { TimeLine, TextMsg, MediaMsg, ReplyMsg, DocMsg }
