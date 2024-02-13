import styled from "styled-components"

const List = ()=>{
    return (
       <ListWrapper> 
        <div className="list-container"> 
        <div>Around you</div>
        <div>View all</div>
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