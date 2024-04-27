

const URL = ()=>{
    if(process.env.NODE_ENV === "development"){
        return DEVENDPOINT
    }
    return PRODENDPOINT
}

const DEVENDPOINT = { 
    endpoint: "https://daycare-backend-1.onrender.com"
}

const PRODENDPOINT = {
    endpoint: "https://daycare-backend-1.onrender.com"
} 

const ENDPOINT = {
    signup: "/signup",
    login: "/auth",
    verify: "verify-email",
    getChildCares:  "/locate-childcares",
    searchChildcares: "/search-childcares",
    upload: "/upload/childcares",
    createProfile: "/create-childcare-profile",
    chats: "/chat",
    users:"/users",
    message: "/message",
    register: "/register",
    resendOtp: "/otp",
    userprofile: "/upload/user",
    user_image: "/user",
    create_user_profile: "/create-user-profile"
}

export {URL,ENDPOINT}