import React, { useState } from 'react'
import Statistic from './Statistic'
import Button from './Button';


const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="all" value={props.all} />
          <Statistic text="average" value={props.average} />
          <Statistic text="positive" value={props.positive} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  var all = good + neutral + bad
  var average = (good * 1 + neutral * 0 + bad * -1) / 3
  var positive = good / all

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button name={"good"} handleClick={() => setGood(good + 1)} />
      <Button name={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button name={"bad"} handleClick={() => setBad(bad + 1)} />
      {(good === 0 && neutral === 0 && bad === 0) ? <h3>No feedback given</h3> :
        <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
      }
    </div>
  )
}

export default App;