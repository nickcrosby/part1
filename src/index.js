// here, we import the useState function.
// useState allows us to change the state of components
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // the function body that defines the component begins with the function call.
  // the counter variables are assigned the initial value of state which is 0.
  const [ counter, setCounter ] = useState(0)

  // the application calls the setTimeout function and passes it two parameters:
  // a function to increment the counter state and a timeout of one second.
  setTimeout(
    () => setCounter(counter + 1),
    1000   // the 1000 here denotes 1 second.
  )

  console.log('rendering...', counter)

  // when the state modifying setCounter is called, React re-renders the component
  // which means that the function body of the component gets re-executed.
  return (
    <div>{counter}</div>
  )
}

// this command renders the contents of the <App /> component into the div-element,
// as defined in the file public/index.html, having the id value 'root'.
ReactDOM.render(
  <App />, document.getElementById('root')
)