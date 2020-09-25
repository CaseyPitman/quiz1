//This module renders the answer choices and handles clicks on answers.

import React from 'react';

let Choices  = (props) => {

   //Set default class name for answer choices (unselected)
   let className = 'choice';


   //Handles click on an answer
   let clickHandler = (event) => {

      //Answer is correct - it will turn green. 
      if (props.isCorrect){
         event.target.className = 'correct';
      } 
      // Answer is incorrect - it will turn red. 
      else {
         event.target.className = 'incorrect';
      }
      
      //Call to advance the game is briefly delayed to allow user to see if their answer 
      //was correct or incorrect. 
      setTimeout(() => props.nextQuestion(props.isCorrect), 1000);
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