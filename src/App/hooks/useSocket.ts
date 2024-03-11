import { useEffect, useState } from "react"
import useGetuserInfoFromStorage from "../../utils/useGetUserInfoFromStorage"
import { TMessage } from "../../pages/Messages/type"
import { TOnlineUsers } from "../type"
import { Socket, io } from "socket.io-client"
import { URL } from "../../constants/endpoints"

const useSocket = ()=>{
    const [messages, setMesssages] =  useState<TMessage[]>()

    const [onLineUsers, setOnlineUsers] = useState<TOnlineUsers | null>(null)
    const [socket, setSocket] = useState<Socket | null>(null)
    
    
    
    let {user} = useGetuserInfoFromStorage()
    
    useEffect(()=>{
        let socket = io(URL().endpoint)
        setSocket(socket)
        
        
        return ()=>{
        socket.disconnect()
        }
    },[])
    
    
    useEffect(()=>{
          socket?.emit("newUser", user?.message._id)
          socket?.on("onlineUsers",  (online)=>{
          setOnlineUsers(online)
          })
    
          return ()=>{
            socket?.off("onlineUsers")
          }
    },[socket])
    
    useEffect(()=> {
      socket?.on("getMessage", (message) => {
        setMesssages((prev)=> {
          if(prev){
            return [...prev,message]
          }
        })
      })
    
    
      return ()=>{
        socket?.off("getMessage")
      }
    },[socket])

    return {messages, setMesssages, onLineUsers, socket}
}

export default useSocket