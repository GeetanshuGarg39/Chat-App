import React from 'react'
import { useDispatch } from 'react-redux';
import { UpdateProfileBarType } from '../redux/slices/app';
import { SharedDocs, SharedLinks } from '../data';

const truncateText = (string, n) => {
    return string?.length > n ? `${string?.slice(0, n)}...` : string;
};

const SharedMessages = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    return (
        <div class="h-[100vh] bg-slate-100 w-1/5 overflow-y-scroll scrollbar-hide">
            <div class="flex items-center justify-between h-24 p-6 sticky top-0 z-10 bg-slate-100">
                <button class="flex justify-end" onClick={() => {
                    dispatch(UpdateProfileBarType("CONTACT"));
                }}>
                    <i class="ph ph-arrow-bend-up-left text-xl hover:text-blue-500"></i>
                </button>
            </div>


            <div className="flex justify-center items-center">
                <div
                    onClick={() => setValue(0)}
                    className={`${value === 0
                        ? 'border-b-2 border-blue-500'
                        : 'border-b-2 border-transparent hover:border-gray-400'
                        } pb-1 mx-5 cursor-pointer`}
                >
                    Media
                </div>
                <div
                    onClick={() => setValue(1)}
                    className={`${value === 1
                        ? 'border-b-2 border-blue-500'
                        : 'border-b-2 border-transparent hover:border-gray-400'
                        } pb-1 mx-5 cursor-pointer`}
                >
                    Links
                </div>
                <div
                    onClick={() => setValue(2)}
                    className={`${value === 2
                        ? 'border-b-2 border-blue-500'
                        : 'border-b-2 border-transparent hover:border-gray-400'
                        } pb-1 mx-5 cursor-pointer`}
                >
                    Docs
                </div>
            </div>

            <div class="p-5">
                {
                    (() => {
                        switch (value) {
                            case 0:
                                return (
                                    <div class="grid grid-cols-3 gap-5">
                                        {
                                            ["nature", "car", "sky", "river", "grassland", "technology"].map((el, i) => {
                                                return (
                                                    <img
                                                        key={i}
                                                        src={`https://source.unsplash.com/random/500x300/?${el}`}
                                                        width={88}
                                                        height={88}
                                                        class="w-full"
                                                        alt=""
                                                    />
                                                )
                                            })
                                        }

                                    </div>
                                )

                            case 1:
                                return SharedLinks.map((ele) => {
                                    return (
                                        <div class="py-1">
                                            <div class={ele.incoming ? "flex" : "flex flex-row-reverse"} >
                                                <div class="w-full">
                                                    <div class={ele.incoming ? "max-w-md p-2 rounded-2xl overflow-hidden rounded-tl-none bg-slate-100" : "max-w-md p-2 rounded-2xl overflow-hidden rounded-tr-none bg-blue-400 text-slate-100"}>
                                                        <div class="flex flex-col gap-2">
                                                            <div class="flex items-center bg-white text-black p-3 rounded-xl justify-between">
                                                                <div class="bg-slate-200 rounded-xl p-4 flex items-center justify-center">
                                                                <i class="ph ph-link text-4xl"></i>
                                                                </div>
                                                                <div class="flex flex-col gap-1 w-full justify-start items-start m-2">
                                                                    <h3 class="text-blue-500">www.example.com</h3>
                                                                    <p>
                                                                        {truncateText(ele.message, 20)}
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            case 2:
                                return SharedDocs.map((ele) => {
                                    return (
                                        <div class="py-1">
                                            <div class={ele.incoming ? "flex" : "flex flex-row-reverse"} >
                                                <div class="w-full">
                                                    <div class={ele.incoming ? "max-w-md p-2 rounded-2xl overflow-hidden rounded-tl-none bg-slate-100" : "max-w-md p-2 rounded-2xl overflow-hidden rounded-tr-none bg-blue-400 text-slate-100"}>
                                                        <div class="flex flex-col gap-2">
                                                            <div class="flex flex-col items-center bg-white text-black p-5 rounded-xl justify-between gap-3">
                                                                <div class="bg-slate-200 h-40 w-full rounded-xl">
                                                                </div>
                                                                <div class="flex items-center justify-between gap-2 w-full">
                                                                    <div class="flex justify-center items-center gap-2">
                                                                        <i class="ph ph-file text-2xl flex"></i>
                                                                        <h3>Dummy.png</h3>
                                                                    </div>
                                                                    <button>
                                                                        <i class="ph ph-download-simple text-2xl"></i>
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )

                            default:
                                break;
                        }
                    })()
                }
            </div>
        </div>

    )
}

export default SharedMessages
