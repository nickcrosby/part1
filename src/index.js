// here, we import the useState function
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // course and its parts now fit into a single JavaScript object
  const course = {
    name: 'Half Stack application development',
      parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <p>{course.name}</p>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    </div>
  )
}

// this command renders the contents of the <App /> component into the div-element,
// as defined in the file public/index.html, having the id value 'root'
ReactDOM.render(
  <App />, document.getElementById('root')
)