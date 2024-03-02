import { useQuery } from "react-query"
import { getState } from "../../../services/GetState"


const useGetStates = ()=>{
    const {data, isFetching} = useQuery("state", getState, {
        staleTime: 5000,
        cacheTime: 5000,
    })

    return {data, isFetching}
}

export default useGetStates