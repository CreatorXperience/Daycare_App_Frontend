import styled from "styled-components"
import { colors } from "../../constants/colors"
import { GoArrowRight } from "react-icons/go"

type TListProps = {
    right?: string,
    left: string
}
const List = ({right, left}: TListProps)=>{
    return (
       <ListWrapper> 
        <div className="list-container"> 
        <div className="left">{left}</div>
        {right && <div className="right">{right}
        <span><GoArrowRight /></span>
        </div>}
        </div>
       </ListWrapper>
    )
}

export default List

const ListWrapper = styled.div`
margin-top: 10px;

.list-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;

    .left {
        font-size: 14px;
        font-weight: 900;
    }

    .right {
        color: ${colors.primary.darkGreen};
        font-size: 12px;
        font-weight: 900;
    }

}`