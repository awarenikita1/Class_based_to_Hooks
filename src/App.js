import './App.css';
import React, {Component} from 'react';

/* CLASS BASED COMPONENT starts here*/
class App_ extends Component {
  handleClick = () => {
    console.log("Hello from class based!!")
  }

  render() {
    return <div> 
      Hello World 
      <button onClick={this.handleClick}>
        Click me! 
      </button>
    </div>    
  }
}

export default App_;
