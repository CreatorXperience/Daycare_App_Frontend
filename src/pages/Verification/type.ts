type TOtpPayload = {
    otp: string,
    ownerId: string
}

type TOtpResponse = {
    message: string,
    status: string
}

export type {TOtpPayload,TOtpResponse}