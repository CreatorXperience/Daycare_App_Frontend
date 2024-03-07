type TDetails = {
    content: {
        owner: string,
        role?: string,
        phoneNumber?: string,
        setIsCopied:  React.Dispatch<React.SetStateAction<boolean>>,
        id?: string
    }
}

export type {TDetails}