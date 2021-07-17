// here, we import the useState function
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// here we are adding a state to our application's App component with the help of React's state hook
const App = () => {

  const [ counter, setCounter] = useState(0)

  // increments the counter everytime the button named 'plus' is pressed
  const increaseByOne = () => setCounter(counter + 1)

  // sets the counter to '0' everytime the button named 'zero' is pressed
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)

  // everytime the setCounter modifies the state it causes the component to rerender
  // the value of the onClick attributes for each button is a variable containing a reference to 2 existing functions
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)