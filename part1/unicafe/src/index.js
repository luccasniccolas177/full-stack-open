import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
  <h1>{props.text}</h1>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{
    text}
    </button>
)

const StatisticsLine = ({text, value}) => {
  if ( {text} === 'positive') {
    return(
      <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
    )
  }
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
} 

const Statistics = ({all, good, neutral, bad}) => {
  const arr = all
  const average = (arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/arr.length
  const isOne =(value) => {
    return value === 1
  }
  const positive = arr.filter(isOne)
  const positivePorcentage = (positive.length/arr.length*100)

  if(arr.length === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />          
          <StatisticsLine text='bad' value={bad} />          
          <StatisticsLine text='all' value={arr.length} />                  
          <StatisticsLine text='average' value={average} />
          <StatisticsLine text='positive' value={positivePorcentage} />
          </tbody>
      </table>
    
  )
}
  

const App = () => {
  // save clicks of each button to its own state
  const [all, setAll] = useState ([])
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
      setGood(good + 1)
      setAll(all.concat(1))
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all.concat(0))
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all.concat(-1))
  }

  return (
    <div>
      <Title text='Give feedback'/>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <Title text='Statistics'/>
      <Statistics all={all} good={good} neutral={neutral} bad={bad}  />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)