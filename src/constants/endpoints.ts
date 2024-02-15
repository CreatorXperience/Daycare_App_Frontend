const URL = ()=>{
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

const ENDPOINT = {
    signup: "/signup"
}

export {URL,ENDPOINT}