import { useEffect } from "react"
import useGetDayCare from "./useGetDaycare"
import useUserRegistered from "./useUserRegistered"
import useRegister from "./useRegisterDayCare"

const useHandleRegister = ()=>{
    const {data,setId,isLoading} = useGetDayCare()
    const {data: registered, setId: setDayCareId, user: loggedInUser} = useUserRegistered()
    const {mutateRegister, response, isLoading:registrationLoading} = useRegister()

    useEffect(()=>{
        if(data){
           setDayCareId(data._id)
        }else  if(response){
            setDayCareId(response.registered[1])
        }
    },[data, response,setDayCareId])


    const onMutateRegister = (id?: string)=> {
        if (id &&  !registered) 
        mutateRegister(id)
    }

    return {onMutateRegister, registrationLoading, loggedInUser, registered, data,setId, isLoading}
}

export default useHandleRegister