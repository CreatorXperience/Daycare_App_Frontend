import axios from "axios"
import { TState } from "../../components/LocationNav/type"

const getState = async ()=>{
    try{

        let response = await axios.get("https://countriesnow.space/api/v0.1/countries/population/cities")
        return response.data.data as TState[]
    }
    catch(e){
        console.log(e)
    }
}

export {getState}