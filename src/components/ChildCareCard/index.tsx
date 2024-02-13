import Card from "../Card"
import ChildCareCardWrapper from "./ChildCareCardWrapper"

const ChildCareCard  = ()=>{
    return (
        <ChildCareCardWrapper>
        <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
            </div>
        </ChildCareCardWrapper>
    )
}

export default ChildCareCard

