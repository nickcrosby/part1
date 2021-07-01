import React from 'react'
import ReactDOM from 'react-dom'

//Here, the function defining the component has a parameter (props)
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

//React component with the name 'App'
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}

//This command renders the contents of 'App' into the div-element, having the id value 'root'
ReactDOM.render(<App />, document.getElementById('root'))
