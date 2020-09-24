//This module renders the answer choices and handles clicks on answers.

import React from 'react';

let Choices  = (props) => {

   //Handles click on an answer
   let clickHandler = (event) => {

      //Pass boolean

      props.nextQuestion(props.isCorrect)
      
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