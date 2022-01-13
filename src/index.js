// here, we import the useState function
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// this 'Display' component is responsible for displaying the value of the counter
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

// button component for all the buttons of our application
// here we need to pass the event handler (onClick) as well as the title of the button through the component's props
const Button = (props) => {
  // note: you have to include a return statement for any component that renders anything
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Button2 = (props) => {
  return (
    <button onClick={props.handleClick}>
      
    </button>
  )
}

// here we are adding a state to our application's App component with the help of React's state hook
const App = () => {
  
  // it is possible to render dynamic content inside of a component
  const a = 10
  const b = 20
  
  // set the state of both the left and right counter to 0
  // the application only has a single piece of state
  // the event handlers have to take care of changing the entire application state
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // used to update the left counter
  const handleLeftClick = () => {
    // set the left counter to the new counter
    // which is the previous state of left, + 1
    setClicks({ ...clicks, left: clicks.left + 1})
  }

  // used to update the right counter
  const handleRightClick = () => {
    // set the right counter to the new counter
    // which is the previous state of right, + 1
    setClicks({ ...clicks, right: clicks.right + 1})
  }

  // the application's state is stored in App, but it is passed down to the Display component through props
  // using the component is straightforward, as we only need to pass the state of the counter to it

  // when you have multiple consts in the App component, it is necessary to declare the return function

  // any JavaScript code within the curly braces is evaluated and the result of this evaluation
  // is embedded into the defined place in the HTML produced by the component
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
      <p>{a} plus {b} is {a + b}</p>
    </div>
  )
}

// this command renders the contents of the <App /> component into the div-element,
// as defined in the file public/index.html, having the id value 'root'
ReactDOM.render(
  <App />, document.getElementById('root')
)