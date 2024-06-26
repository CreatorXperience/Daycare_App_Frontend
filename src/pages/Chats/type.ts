type TIds = {
    usrId: string,
    chatId: string
}

type TChats = {
    fullname: string,
    day_care_owner: boolean,
    _id:  string,
    chatId: string,
    loading: boolean
}


type TError = {
    members: null,
    error:any
}


export  type  {TIds, TChats, TError}