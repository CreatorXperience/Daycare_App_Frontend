import { useEffect, useState } from "react"

const useNav = ()=>{
    const [openNav, setOpenNav] = useState<boolean>(false)

    useEffect(()=>{
        const eventHandler = ()=>{
            setOpenNav(false)
        }
        document.body.addEventListener("click", eventHandler)

        return ()=>{
            document.body.removeEventListener("click", eventHandler)
        }
    },[])

    const onOpenNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.stopPropagation()
        setOpenNav(true)
    }

    return {openNav, onOpenNav}
}

export default useNav