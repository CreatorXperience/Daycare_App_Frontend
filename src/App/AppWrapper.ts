import styled from "styled-components";

const AppWrapper = styled.div<{isModalOpen: boolean}>`
  width: 100%;
  height: 100%;
  overflow-y: hidden;

  #modal-root{
  z-index: ${props =>  props.isModalOpen ? "999" : "-1"};
  background-color: red;
}
`

export default AppWrapper