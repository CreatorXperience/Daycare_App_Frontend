import styled from "styled-components";
import caretLeft from '../../constants/images/caretleft.png'

const CaretLeft = () => {
    return ( 
        <CaretLeftWrapper>
            <div className="caret-wrapper">
                <img src={caretLeft} alt={caretLeft} />
</div>
        </CaretLeftWrapper>
     );
}
 
export default CaretLeft;

const CaretLeftWrapper =styled.div`
    .caret-wrapper{
        padding: 10px;
    }
`
