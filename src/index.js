import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack Application development'
  const part1 = 'Fundemantals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

//This command renders the contents of 'App' into the div-element, having the id value 'root'
ReactDOM.render(<App />, document.getElementById('root'))
