type TOtpPayload = {
    otp: string,
    ownerId: string
}

type TOtpResponse = {
    message: string,
    status: string
}


type TOtp = {
    email: string;
    id: string
}

type TResendOtp = {
    id?: string,
    email?: string
     setError: React.Dispatch<React.SetStateAction<undefined>>
}
export type {TOtpPayload,TOtpResponse, TOtp, TResendOtp}