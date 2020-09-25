//This module renders the answer choices and handles clicks on answers.

import React from 'react';

let Choices  = (props) => {

   let className = 'choice'


   //Handles click on an answer
   let clickHandler = (event) => {
      console.log(props);

      if (props.isCorrect){
         event.target.className = 'correct'
      } else {
         event.target.className = 'incorrect'
      }
      //Pass boolean
      setTimeout(() => props.nextQuestion(props.isCorrect), 1000);
      // props.nextQuestion(props.isCorrect)
      
   }


   return (
      <button 
         className = {className} 
         id = {props.id} 
         onClick = {clickHandler}>
            {props.choice}
         </button>
   )
}

export default Choices;