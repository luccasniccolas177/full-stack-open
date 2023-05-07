import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick}) => (
  <button onClick={onClick}>
    Next anecdote
    </button>
)

const VoteButton = ({onClick}) => (
  <button onClick={onClick}>
    Vote
    </button>
)

const ActualAnecdote = ({anecdotes, selected, votes}) => {
  return (
    <div>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p>has {votes[selected]} votes</p>
  </div>
  )
}

const MostVotes = ({votes, anecdotes}) => {
  var max = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[max]}</p>
      <p>has {votes[max]} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(6)) 
  //var max = votes.indexOf(Math.max(...votes));

  const getRandom = () => {
    return Math.floor(Math.random() * 6)
  }

  const handleClick = () => {
    setSelected(getRandom())
  }

  const handleClickVote = () => {
    const copy = [...votes]
    copy[selected] += 1 
    setVotes(copy)
  }

  return (
    <div>
      <ActualAnecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button onClick={handleClick}/>
      <VoteButton onClick={handleClickVote} />
      <MostVotes votes={votes} anecdotes={anecdotes} /> 
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)