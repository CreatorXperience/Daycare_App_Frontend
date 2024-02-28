import styled from "styled-components";
import { colors } from "../../constants/colors";

const LastSeenWrapper = styled.div`
width: 100%;
display: flex;
padding: 12px;

.seen-container {
    width: 28%;
    height: 90px;
    border-radius: 15px;
    background-image: url("https://i.pinimg.com/564x/85/77/82/85778201831a8150454e9b94efd526e3.jpg");
    background-size: cover;
    margin:5px
}

.skeleton {
    width: 28%;
    height: 90px;
    border-radius: 15px;
    background-color: ${colors.primary.lightGray};
    background-size: cover;
    margin:5px;
    position: relative;

    .light {
        position: absolute;
        width: 60px;
        height: 100%;
        background-color: white;
        filter: blur(30px);
        animation: move ease-in-out 1s infinite;
        animation-delay: 10;
        left: 0px;
    }
 
    @keyframes move {
    0%{
        left: 0px;
    }    
    
    25%{
        left: 20px;
    }

    50%{
        left: 40px;
    }

    75%{
       left: 60px 
    }
    100%{
        right: 0px;
    }
    }
}

`

export default LastSeenWrapper