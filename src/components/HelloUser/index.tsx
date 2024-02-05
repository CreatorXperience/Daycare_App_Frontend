import styled from "styled-components";
import notificationBell from '../../constants/images/notificationBell.png'

const HelloUser = () => {
    return ( 
        <HelloUserWrapper>
            <div className="hello-user-cont">
                <div className="hello-user-head">
                    <h3>Hello,</h3>
                    <h1>David joe</h1>
                </div>

                <div className="image">
                    <img src={notificationBell} alt={notificationBell} />
                </div>
</div>
        </HelloUserWrapper>
     );
}
 
export default HelloUser;

const HelloUserWrapper =styled.div`
    .hello-user-cont{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
`