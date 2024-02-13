import { createRef, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function App() {
createRef()
let myRef = createRef<HTMLDivElement>()
 let observer = new ResizeObserver((size)=>{
console.log(size)
 })
 
  useEffect(()=>{
    if(myRef !== null){
      // observer.observe(myRef)
    }
  },[])

  return (
    <AppWrapper>
    <div className="App"ref={myRef}>
      <Outlet />
    </div>
    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 3px solid green;
  overflow-y: hidden;
`