import { TLoginResponse } from "../pages/Auth/Login/type"

let useGetuserInfoFromStorage = ()=>{
let user = localStorage.getItem("DayCareuserLoginInfo")
if(user){
    let parse = JSON.parse(user) as TLoginResponse
    return {user: parse}
}
return {user: null}
}

export default useGetuserInfoFromStorage