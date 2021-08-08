import React, {Component} from 'react';

function corresponding_function_based_component() {
  const handleClick = () => {
    console.log("Hello from function based!!")
  }

  return (
    <div> 
      Hello World 
      <button onClick={handleClick}>
        Click me! 
      </button>
    </div>    
  );
}

export default corresponding_function_based_component;

