import React, { useState } from 'react'

const Actions = [
    {
        icon: <i class="ph ph-camera"></i>,
        y: 102,
        title: "Photo/Video",
    },
    {
        icon: <i class="ph ph-sticker"></i>,
        y: 172,
        title: "Stickers",
    },
    {
        icon: <i class="ph ph-image"></i>,
        y: 242,
        title: "Image",
    }, {

        icon: <i class="ph ph-file"></i>,
        y: 312,
        title: "Document",
    },
    {
        icon: <i class="ph ph-user"></i>,
        y: 382,
        title: "Contact",
    },
];

const Footer = () => {
    const [openActions, setOpenActions] = useState(false)
    return (
        <div class="flex items-center gap-3 p-4">
            <div class="max-w-fit">
                <div class="relative" style={{ display: openActions ? "inline-block" : "none" }}>
                    {Actions.map((e, i) => (
                        <button key={i} style={{ position: "absolute", top: -e.y }} class="flex items-center justify-center shrink-0 w-12 h-12 bg-blue-400 rounded-full overflow-hidden text-2xl text-white hover:bg-blue-500" type="button">
                            {e.icon}
                        </button>
                    ))}
                </div>
                <button class="shrink-0 text-gray-400" type="button" onClick={() => {
                    setOpenActions(!openActions)
                }}>
                    <i class="ph ph-plus-circle text-2xl"></i>
                </button>
            </div>

            <div class="relative flex w-full max-h-24 overflow-hidden">

                <div class="w-full border rounded-full p-2 px-3 outline-0" contentEditable="true" tabIndex="0" dir="ltr" spellCheck="false" aria-autocomplete="off" autoCorrect="off" autoCapitalize="off">
                    Type some message here...
                </div>
            </div>
            <button class="flex items-center justify-center shrink-0 w-12 h-12 bg-blue-400 rounded-full overflow-hidden" type="button">
                <i class="ph ph-paper-plane-right text-2xl text-white"></i>
            </button>
        </div>
    )
}

export default Footer
