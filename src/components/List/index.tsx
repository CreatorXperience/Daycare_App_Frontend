import styled from "styled-components"

type TListProps = {
    right?: string,
    left: string
}
const List = ({right, left}: TListProps)=>{
    return (
       <ListWrapper> 
        <div className="list-container"> 
        <div>{left}</div>
        {right && <div>{right}</div>}
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

}`