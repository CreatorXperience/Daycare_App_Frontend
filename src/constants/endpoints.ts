const ENDPOINTS = ()=>{
    if(process.env.NODE_ENV === "development"){
        return DEVENDPOINT
    }
    return PRODENDPOINT
}

const DEVENDPOINT = {
    endpoint: "http://localhost:3030"
}

const PRODENDPOINT = {
    endpoint: ""
} 

export default ENDPOINTS