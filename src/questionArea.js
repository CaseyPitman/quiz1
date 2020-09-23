//This module renders the current question

import React from 'react';





let QuestionArea = (props) => {

   let currentQuestion = ''

   if (props.quizStage === 'intro'){
      currentQuestion = 'Do you have what it takes to ace the legendary general knowledge quiz?';
   } else if (props.quizStage === 'playing'){
      currentQuestion = props.currentQuestion.question;
   } else if (props.quizStage === 'end'){
      currentQuestion = 'Congratulations. You finished. ';
   }

   return (
      <div className = 'question-area'>
         <h2 className = 'question'>{currentQuestion}</h2>
      </div>
   )
}

export default QuestionArea;