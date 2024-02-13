import styled from "styled-components"
import { colors } from "../../constants/colors"

const Compatible = ()=> {
    return (
        <CompatibleWrapper>
        <div className="message">
        Sorry, There is no view for this screen size, View this web app on your mobile phone.
        </div>
        </CompatibleWrapper>
    )
}

export default Compatible

const CompatibleWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.primary.lightGray};
    .message {
        font-size: 18px;
    }
`