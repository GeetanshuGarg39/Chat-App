import React, { useState } from 'react'
import { CallLogBox } from '../../components/CallBox'
import { CallList } from '../../data'
import CreateCall from '../../components/CreateCall'

const Call = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handleOpenDialog = () => {
        setOpenDialog(true);
    }
    
    return (
        <>
            <div className='relative h-screen w-full lg:w-[320px] bg-slate-100 drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)] flex flex-col lg:flex-row'>
                <div className="grow lg:shrink-0 scrollbar-hide overflow-y-auto lg:max-w-xs">
                    <div className="flex flex-col gap-3 p-6 md:bg-slate-100 sticky top-0 z-10 border-b">
                        <div className="flex items-center justify-between">
                            <h1 className="font-medium text-xl">Call Logs</h1>
                            <div className="flex items-center gap-3 text-gray-400">
                                <a className="block w-5 h-5" href="#" aria-label='Notification'><i className="ph ph-notification w-full h-full"></i></a>
                                <a className="block w-5 h-5" href="#" aria-label='Chat settings'><i className="ph ph-sliders w-full h-full"></i></a>
                            </div>
                        </div>

                        <div className="relative w-full">
                            <label>
                                <input type="text" className="focus:outline-none focus:border-gray-400 w-full py-2 px-3 pr-6 border border-gray-400 rounded-full" placeholder='Search...' />
                            </label>
                        </div>

                        <div className="flex items-center justify-between text-blue-500 hover:text-blue-700 cursor-pointer mt-3" onClick={handleOpenDialog}>
                            <h3>Start new conversation</h3>
                            <i class="ph ph-plus"></i>
                        </div>
                    </div>

                    <div className="p-6">
                        {CallList.map((person, i) => {
                            return <CallLogBox key={i} {...person} />
                        })}
                    </div>
                </div>
            </div>

            {openDialog && <CreateCall open={openDialog} handleClose={handleCloseDialog} />}
        </>
    )
}

export default Call
