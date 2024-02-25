import styled from "styled-components"

const Alert = ()=>{
    return (
        <AlertWrapper>
        <div className="alert-container">
        Copied  to clipboard successfully
        </div>
        </AlertWrapper>
    )
}

export default Alert

const AlertWrapper = styled.div`
width: 100%;
height: auto;
position: absolute;
top: 0;
.alert-container {
    width: 100%;
    height: 80px;
    
}
`