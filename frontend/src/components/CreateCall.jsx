import React from 'react'
import { CallBox } from './CallBox'
import { MembersList } from '../data'

const CreateCall = ({ open, handleClose }) => {

    return (
        <div
            className={`fixed inset-0 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } transition-opacity flex flex-col items-center justify-center`}
        >
            <div className="fixed inset-0 bg-blue-50 opacity-50" />

            <div className="bg-white p-6 w-96 rounded-lg shadow-xl relative">
                <div className='flex items-center justify-between mb-4'>

                    <div>
                        <h1 className="text-xl font-semibold">Start Call</h1>
                    </div>

                    <button
                        onClick={handleClose}
                        className="text-xl hover:text-blue-500"
                    >
                        <i className="ph ph-x" />
                    </button>
                </div>

                <div className='flex flex-col gap-8'>
                    <div className="relative w-full">
                        <label>
                            <input type="text" className="focus:outline-none focus:border-gray-400 w-full py-2 px-3 pr-6 border border-gray-400 rounded-full" placeholder='Search...' />
                        </label>
                    </div>
                    <div className=".scrollbar-hide overflow-y-auto h-60 p-4">
                        {MembersList.map((person, i) => {
                            return <CallBox key={i} {...person} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCall
