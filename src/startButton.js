//This module renders the start button

import React from 'react'

let StartButton = (props) => {

   //Click handler for start button.
   let clickHandler = () => {
      props.clickStart();
   }
   

   return(
      <button 
      className = 'choice'
      onClick = {clickHandler}
      >Start</button>
   )
}

export default StartButton;