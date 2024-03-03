import { AxiosResponse } from "axios";

type TQuery = {
    queryKey: string;
    queryFn: () => Promise<AxiosResponse<any, any> | undefined>;
}[] 

export type {TQuery}