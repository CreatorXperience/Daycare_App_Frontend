import styled from "styled-components";

const HomeWrapper =  styled.div`
height: 100vh;
position: relative;

.home-container {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    overflow-y:  auto;
    position: fixed;
    top: 0;
}
.body {
    width: 100%;
    height: 87%;
    border:1px solid yellow;
    position: absolute;
    z-index: 0;
    padding: 12px;
}

.footer{
    height: 12%;
    border: 1px solid blue;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 5;
}
`

export default HomeWrapper