import {useQuery} from "react-query"
import axiosInstance from "../../services/Axios/axiosInstance"
const useGetDayCares = ()=>{
    const getQueries = async ()=>{
    // let response = axiosInstance.get()
    }
    let {data} = useQuery("getdaycares", getQueries)
}