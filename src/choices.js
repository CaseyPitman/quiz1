//This module renders the answer choices and handles clicks on answers.

import React from 'react';

let Choices  = (props) => {

   //Handles click on an answer
   let clickHandler = (event) => {
      console.log(`answer ${event.target.id} has been clicked`);
      //Pass id 
   }


   return (
      <button 
         className = 'choice' 
         id = {props.id} 
         onClick = {clickHandler}>
            {props.choice}
         </button>
   )
}

export default Choices;