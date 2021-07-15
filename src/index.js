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

// the values of the properties can be any type, like integers, strings, arrays objects
// the properties of an object are referenced by using the "dot" notation, or by using brackets
console.log(object1.name)       // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName]) // 35 is printed

// arrow functions:
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

// the function call for above:
const result = sum(1, 5)
console.log(result)

// you can use a single expression to manipulate arrays
const tArray = [1, 2, 3]
const tSquared = tArray.map(p => p * p)
// tSquared is now [1, 4, 9]

// header for rendering course name
const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

// content for rendering the parts of the course
const Content = (props) => {
  console.log(props)
  return <p>{props.name}</p>
}

/*
const App = () => {
  // you can define a constant within a constant that can be used in the return function
  const course = {
    name: 'Half Stack Application development',
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
    // all elements must be wrapped by at least one pair of div tags or empty tags
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  )
}
*/

const Hello = ({ name, age }) => {
  // if we find ourselves using props.name, etc. a lot,
  // we can simplify it by assiging them to seperate variables (name & age)
  // this method of assigning is called 'destructuring', as seen above

  // if we have the age of the person being greeted,
  // we can guess their year of bith
  const bornYear = () => new Date().getFullYear() - age
    // the function new Date(),getFullYear() is built-in and returns the current year
  
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}.</p>
    </div>
  )
}

// here we are going to try creating a counter where the value increased as a function of time (e.g. a clock)
// this new application is dynamic and thus will have to utilise 'Page re-rendering'

// the app component is given the value of the counter via the counter prop
const App = (props) => {
  const {counter} = {props}
  return (
    <div>{counter}</div>
  )
}

let counter = 1

// we can get the component to rerender by calling the reactDOM.render multiple times, in the following way:
const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
    document.getElementById('root'))
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)

