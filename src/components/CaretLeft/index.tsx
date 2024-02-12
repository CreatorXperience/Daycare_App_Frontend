import ICONS from "../../constants/icons";
import CaretLeftWrapper from "./CaretLeftWrapper";

const CaretLeft = () => {
    return ( 
        <CaretLeftWrapper>
            <div className="caret-wrapper">
            {ICONS.caretLeft()}
</div>
        </CaretLeftWrapper>
     );
}
 
export default CaretLeft;
