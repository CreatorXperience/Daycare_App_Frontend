import styled from "styled-components";

const AppWrapper = styled.div<{ismodalopen: string}>`
  width: 100%;
  height: 100%;
  overflow-y: hidden;

  #modal-root{
  z-index: ${props =>  props.ismodalopen ? "999" : "-1"};
  background-color: red;
}
`

export default AppWrapper