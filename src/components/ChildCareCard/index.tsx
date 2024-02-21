import { TChildCare, TCoordinates } from "../../pages/Home/type";
import Card from "../Card"
import ChildCareCardWrapper from "./ChildCareCardWrapper"

type TChildCardProps = {
    data?: TChildCare[],
    coordinates: TCoordinates | undefined
}
const ChildCareCard  = ({data, coordinates}: TChildCardProps)=>{
    return (
        <ChildCareCardWrapper>
        <div className="card-wrapper">
            {data && data.map((item, index)=>{
                return   <Card data={item} key={index} coordinates={coordinates} />
            })}
            </div>
        </ChildCareCardWrapper>
    )
}

export default ChildCareCard

