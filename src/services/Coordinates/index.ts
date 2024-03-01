import axios from "axios"
import type { TCordinates, TValue } from "../../pages/Home/type"

const getCordinates = async (value: TValue | undefined)=>{
    if(value)
    try{

        let response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${value.city}&country=${value.country}`, {
            headers: {
                "X-Api-Key": process.env.REACT_APP_API_KEY
            }
        })
        
        return response.data as TCordinates[]
    }
    catch(e){
        console.log(e)
    }

}

export {getCordinates}