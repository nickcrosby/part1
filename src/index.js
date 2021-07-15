import React from 'react'
import ReactDOM from 'react-dom'

// constant
const x = 1
// variable
let y = 5

console.log(x)
console.log(y)

// array
const t = [1, -1, 3]

// map
const m1 = t.map(value => value * 2)
// the below map transforms the array to a new array that contains strings of HTML
// this type of map is used frequently in React
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m1)
console.log(m2)

// although you can use push, it is prefereable to use the method concat
// t.push(5)

// concat does not add the item to the array, but creates a new array
t.concat(5)

// chrome console on Mac can be accessed by Command -> Shift -> J
// it is good practice to have the console open at all times

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

// forEach calls the function for each of the items in the array
t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})

// object 1
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

//o bject 2
const object2 = {
  name: 'Full Stack web application development',
  level: 'Intermediate studies',
  size: 5
}

// object 3
const object3 = {
  name: {
    first: 'Dan',
    last: 'Abranov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

const App = () => {
  // you can define a constant within a constant that can be used in the return function
  const course = 'Half Stack Application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    // all elements must be wrapped by at least one pair of div tags or empty tags
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

// This command renders the contents of 'App' into the div-element, having the id value 'root'
ReactDOM.render(<App />, document.getElementById('root'))
