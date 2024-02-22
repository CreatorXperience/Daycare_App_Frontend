import axios from "axios"
import { useQuery } from "react-query"

type TState = {
    id: number,
    name: string,
    code: string
}
const useGetStates = ()=>{
    const getState = async ()=>{
        try{

            let response = await axios.get("https://vapi.verifyme.ng/v1/countries/1/states")
            return response.data.data as TState[]
        }
        catch(e){
            console.log(e)
        }
    }
    const {data} = useQuery("state", getState, {
        staleTime: 5000,
        cacheTime: 5000,
    })

    return {data}
}

export default useGetStates