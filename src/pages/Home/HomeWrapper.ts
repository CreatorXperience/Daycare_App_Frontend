import styled from "styled-components";

const HomeWrapper =  styled.div`
height: auto;
position: relative;

.home-container {
    width: 100%;
    height: 100%;
    overflow-y:  auto;
    position: fixed;
    top: 0;
}
.body {
    width: 100%;
    height: 87%;
    position: absolute;
    z-index: 0;
    padding: 12px;
    overflow-y: auto;
}

.footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 5;
}
`

export default HomeWrapper