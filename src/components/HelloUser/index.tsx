import ICONS from "../../constants/icons";
import HelloUserWrapper from "./HelloUserWrapper";

const HelloUser = () => {
    return ( 
        <HelloUserWrapper>
            <div className="hello-user-cont">
                <div className="hello-user-head">
                    <div className="greeting">Hello,</div>
                    <div className="user">David joe</div>
                </div>

                <div className="image">
                    {ICONS.bellIcon()}
                </div>
</div>
        </HelloUserWrapper>
     );
}
 
export default HelloUser;

