// here, we import the useState function
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// here we are adding a state to our application's App component with the help of React's state hook
const App = () => {
  // the component refinition begins with the function call useState(0)
  // the function call adds state to the component and initialises it with the value of 0
  // the function returns an array with two items
  // we assign the items to the variables counter and setCounter using destructuring
  const [ counter, setCounter] = useState(0)
  // counter variable is assigned the initial value of state which is 0
  // setCounter variable is assigned to a function that will be used to modify the state

  // the application calls the setTimeout function and passes it two parameters:
  setTimeout(
    // a function to increment the counter state
    // the first time this is run, it will return the new value of the state: 1
    // this will constantly increment upwards
    () => setCounter(counter + 1),
    // a timeout of 1 second
    1000
  )

  // we can log the values of the component's variables to the console
  // this allows us to debug and test if something is going wrong
  console.log('rendering...', counter)

  // everytime the setCounter modifies the state it causes the component to rerender

  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)