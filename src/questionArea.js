//This module renders the current question

import React from 'react';


let QuestionArea = (props) => {

   return (
      <div className = 'question-area'>
         <h2 className = 'question'>{props.curQuestion}</h2>
      </div>
   )
}

export default QuestionArea;