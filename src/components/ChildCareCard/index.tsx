import Card from "../Card"
import ChildCareCardWrapper from "./ChildCareCardWrapper"
import { TChildCardProps } from "./type";


const ChildCareCard  = ({data, coordinates}: TChildCardProps)=>{
    return (
        <ChildCareCardWrapper>
        <div className="card-wrapper">
            {data ? data.map((item, index)=>{
                return   <Card data={item} key={index}  coordinates={coordinates} />
            }): [1,2].map((item,i)=>{
                return  <div className="card-skeleton" key={i}>
                    <div className="card-light"></div>
                </div>

            })}
            </div>
        </ChildCareCardWrapper>
    )
}

export default ChildCareCard

