//This module renders the current question being asked. 

import React from 'react';


let QuestionArea = (props) => {

   //Declare question
   let currentQuestion = ''
   //Determines type of content based on stage in quiz.

   //Intro stage, quiz has not begun.
   if (props.quizStage === 'intro'){
      currentQuestion = 'Do you have what it takes to ace the legendary general knowledge quiz?';
   }
   // Quiz is actively being played. 
   else if (props.quizStage === 'playing'){
      currentQuestion = props.currentQuestion.question;
   } 
   // Quiz has ended. 
   else if (props.quizStage === 'end'){
      currentQuestion = 'Congratulations. You finished. ';
   }

   return (
      <div className = 'question-area'>
         <h2 className = 'question'>{currentQuestion}</h2>
      </div>
   )
}

export default QuestionArea;