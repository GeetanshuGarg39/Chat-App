import React from 'react'
import { ChatHistory } from '../../data'
import { DocMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './Content';

const Message = () => {
    return (
        <>
            <div class="flex flex-col grow p-6 scrollbar-hide overflow-y-auto">
                {ChatHistory.map((element) => {
                    switch (element.type) {
                        case "msg":
                            switch (element.subtype) {
                                case "img":
                                    return <MediaMsg ele={element} />

                                case "doc":
                                    return <DocMsg ele={element} />                                   

                                case "reply":
                                    return <ReplyMsg ele={element} />

                                default:
                                    return <TextMsg ele={element} />
                            }

                            break;
                        case "divider":
                            return <TimeLine ele={element} />

                        default:
                            return <></>
                    }
                })}
            </div>

        </>
    )
}

export default Message
