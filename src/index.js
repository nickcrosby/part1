// here, we import the useState function
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ name, age }) => {
  // since we reference props.x a few times in the code, it can help to streamlinse if we assign the
  // values of the properties into two variables name and age which we can then use in our code.
  // we can use destructing (as shown above) to make the assignment of variables even easier.

  // the logic for guessing the year of birth is seperated into its own function.
  // the person's age does not have to be passed as a parameter, since the function
  // can directly access all props that are passed to the component (Hello).
  const bornYear = () => new Date().getFullYear() - age // the date function built-in function for getting the current year (2022)

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}

// this command renders the contents of the <App /> component into the div-element,
// as defined in the file public/index.html, having the id value 'root'
ReactDOM.render(
  <App />, document.getElementById('root')
)