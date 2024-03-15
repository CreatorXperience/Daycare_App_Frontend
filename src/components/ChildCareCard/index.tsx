import Card from "../Card"
import ChildCareCardWrapper from "./ChildCareCardWrapper"
import { TChildCardProps } from "./type";


const ChildCareCard  = ({data, coordinates}: TChildCardProps)=>{
    return (
        <ChildCareCardWrapper>
        <div className="card-wrapper">
            {data ? data.map((item, index)=>{
                if(index < 6) {
                    return   <Card data={item} key={index}  coordinates={coordinates} />
                }
                return ""
               
            }): [1,2].map((item)=>{
                return  <div className="card-skeleton" key={item}>
                    <div className="card-light"></div>
                </div>

            })}
            </div>
        </ChildCareCardWrapper>
    )
}

export default ChildCareCard

