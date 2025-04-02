import React from 'react'

function Footer(props) {
    // let myStyle={
    //     backgroundColor: props.mode === "light" ? "white" : "#343e4f",
    //     color: props.mode === "light" ? "black" : "white",

    // }
  return (
  <>
  <div className={`text-center bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`} style={{
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  color: "white",
  padding: "5px 0",
}}>
    <b style={{marginBottom:"0px"}}>Made by Vikas Patidar | © 2025 </b>
  </div>
  </>
  )
}

export default Footer