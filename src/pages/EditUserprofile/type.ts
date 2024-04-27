 type TUserFormProps = {
    name: string,
    children_name: string,
    age: number,
    gender: boolean,
    role: string,
    drop: string,
    take: string
    }
    

type TData = {
    data:Partial<TUserFormProps>,
    token?: string, user?: string,
    id?:string
}

export type {TData,TUserFormProps}