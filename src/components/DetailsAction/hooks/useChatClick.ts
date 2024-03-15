import { useState } from "react"

const useChatClick = ()=>{
    const [isChatClick, setIsChatClick] = useState<boolean>(false)

    const handleChatClick  = (value: boolean)=>{
        setIsChatClick(value)
    }

    return {isChatClick, handleChatClick}
}

export default useChatClick