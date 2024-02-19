import styled from "styled-components"

const Alert = ()=>{
    return (
        <AlertWrapper>
        <div className="alert-container">

        </div>
        </AlertWrapper>
    )
}

export default Alert

const AlertWrapper = styled.div`
width: 100%;
height: auto;
.alert-container {
    width: 100%;
    height: 80px;
    
}
`