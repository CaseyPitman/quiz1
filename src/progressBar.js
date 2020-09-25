//This module renders and updates the progress bar based on progression through the quiz.


import React from 'react';


let ProgressBar = (props) => {

   return (
      <div className = {props.className} id = {props.id}></div>
   )
}

export default ProgressBar;