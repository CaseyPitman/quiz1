import React, {Component} from 'react';
// Styles
import styles from './styles.css';
// Questions data
import questions from './data';
// Components
import QuestionArea from './questionArea';
import Progress from './progress';
import AnswerArea from './answerArea'

const initialState = {
  currentQuestion: "Do you have what it takes to ace the legendary general knowledge quiz?",
  questionCount: 0,
  inProgress: false,
  quizStage: 'end',  //Or 'playing' or 'end'
  score: 0
}


class App extends Component {
  constructor(props){
    super()

    this.state = initialState;
  }


  render(){
    return (
      <div className="App">
    
        <div className = 'container'>

           <QuestionArea 
            curQuestion = {this.state.currentQuestion}/>

          {/* <div className = 'answer-area'>
            <button className = 'choice'>Choice One</button>
            <button className = 'choice'>Choice Two</button>
            <button className = 'choice'>Choice Three</button>
            <button className = 'choice'>Choice Four</button>
          </div> */}

          <AnswerArea
            quizStage = {this.state.quizStage}
          
          />

          <Progress 
            inProgress = {this.state.inProgress}
            questionCount = {this.state.questionCount}
          />

        </div>
      </div>
    );
  }
}

export default App;
