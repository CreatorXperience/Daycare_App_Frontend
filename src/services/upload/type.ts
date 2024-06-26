import { TMessage } from "../../pages/ChildcareProfile/type"

type TUpload = {
    payload: {
        file: File,
        setError: React.Dispatch<React.SetStateAction<Partial<TMessage> | undefined>>,
        endpoint: string
    }
}

export type {TUpload}