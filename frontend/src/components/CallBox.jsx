import React from 'react'

const CallLogBox = ({ img, name, incoming, missed, online, id, type }) => {
    return (
        <div className="flex py-3 px-3 mb-3 border-b border-gray-100 hover:bg-blue-100 hover:-mx-4 hover:px-6 transition-all cursor-pointer bg-white rounded-2xl justify-between ">

            <div className="flex gap-2">

                {online ? (
                    <div className="relative w-12 h-12 shrink-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bottom-0 before:right-0 before:bg-green-500 before:border-2 before:border-white">
                        <img className="w-full h-full rounded-full overflow-hidden object-cover" width="48" height="48" src={img} alt="Avatar" />
                    </div>
                ) : (
                    <div className="relative w-12 h-12 shrink-0">
                        <img className="w-full h-full rounded-full overflow-hidden object-cover" width="48" height="48" src={img} alt="Avatar" />
                    </div>
                )}


                <div className="flex flex-col">
                    <p className="text-lg font-bold">{name}</p>
                    <div className="flex items-center gap-2">
                        {incoming ? (
                            <i class={`ph ph-arrow-down-left ${missed ? "text-red-500" : "text-green-500"}`}></i>
                        ) : (
                            <i class={`ph ph-arrow-up-right ${missed ? "text-red-500" : "text-green-500"}`}></i>
                        )}
                        <p className="text-sm">Yesterday 20:15</p>
                    </div>
                </div>

            </div>

            <div className="flex gap-2 items-center">
                {
                    type ? (
                        <button className="w=5 h-5" type="button">
                            <i class="ph ph-video-camera text-xl text-green-500"></i>
                        </button>)
                        :
                        (
                            <button className="w=5 h-5" type="button">
                                <i class="ph ph-phone text-xl text-green-500"></i>
                            </button>
                        )
                }
            </div>

        </div>
    )
}

const CallBox = ({online, name, img, id}) => {
    return (

        <div className="flex py-3 px-3 mb-3 border-b border-gray-100 hover:bg-blue-100 hover:-mx-4 hover:px-6 transition-all cursor-pointer bg-white rounded-2xl justify-between ">

            <div className="flex gap-2">

                {online ? (
                    <div className="relative w-12 h-12 shrink-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bottom-0 before:right-0 before:bg-green-500 before:border-2 before:border-white">
                        <img className="w-full h-full rounded-full overflow-hidden object-cover" width="48" height="48" src={img} alt="Avatar" />
                    </div>
                ) : (
                    <div className="relative w-12 h-12 shrink-0">
                        <img className="w-full h-full rounded-full overflow-hidden object-cover" width="48" height="48" src={img} alt="Avatar" />
                    </div>
                )}


                <div className="flex flex-col">
                    <p className="text-lg font-bold">{name}</p>
                </div>

            </div>

            <div className="flex gap-2 items-center">
                <button className="w=5 h-5" type="button">
                    <i class="ph ph-video-camera text-xl text-green-500"></i>
                </button>
                <button className="w=5 h-5" type="button">
                    <i class="ph ph-phone text-xl text-green-500"></i>
                </button>
            </div>

        </div>
    )
}

export { CallLogBox, CallBox }
