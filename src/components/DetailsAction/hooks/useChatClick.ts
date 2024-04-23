import { useCallback, useState } from "react"

const useChatClick = ()=>{
    const [isChatClick, setIsChatClick] = useState<boolean>(false)

    const handleChatClick  = (value: boolean)=>{
        setIsChatClick(value)
    }

    const handleChatClickCalback = useCallback(handleChatClick, [handleChatClick])

    return {isChatClick, handleChatClick,handleChatClickCalback}
}

export default useChatClick