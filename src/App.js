import React, {Component} from 'react';
import styles from './styles.css'

class App extends Component {
  constructor(props){
    super()

  }



  render(){
    return (
      <div className="App">
    
        <div className = 'container'>

          <div className = 'top'>
            <h2 className = 'top-text'>Do you have what it takes to ace the legendary pop culture quiz?</h2>
          </div>

          <div className = 'bottom'>
            <div className = 'choice'><h3>Choice One</h3></div>
            <div className = 'choice'><h3>Choice Two</h3></div>
            <div className = 'choice'><h3>Choice Three</h3></div>
            <div className = 'choice'><h3>Choice Four</h3></div>
          </div>

          <div className = 'progress'>
            <h4>Question 1 of 20</h4>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
