import styled from "styled-components";

const CardWrapper = styled.div`
width: 60%;
flex-shrink: 0;
margin: 5px;

        .card {
        width: 100%;   
        height: 100%;
        flex-shrink: 0;

        .image {
        width: 100%;
        height: 60%;
        border-radius: 10px;
        background-image: url("https://i.pinimg.com/564x/bd/78/30/bd7830482a990a97c57300a6f6a4bade.jpg");
        background-size: cover;
    }

    .info {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        padding: 5px;

        .childcare-name{
            font-size: 14px;
            font-weight: 600;
        }
    }
}
`

export default CardWrapper