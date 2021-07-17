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

// here we are adding a state to our application's App component with the help of React's state hook
const App = () => {
  const [ counter,setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)

  // the application's state is stored in App, but it is passed down to the Display component through props
  // using the component is straightforward, as we only need to pass the state of the counter to it
  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)