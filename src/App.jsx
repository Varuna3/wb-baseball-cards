import { useState } from 'react'
import playerData from './playerData.js'

let cards = playerData.map(e => {
  return (
    <BaseballCard
      {...{
        name: e.name,
        team: e.team,
        position: e.position,
        stats: e.stats,
        imgUrl: e.imgUrl,
        key: e.cardId,
      }}
    />
  )
})

function BaseballCard(props) {
  let [showPicture, setShowPicture] = useState(true)
  const toggleCard = () => {
    setShowPicture(!showPicture)
  }

  if (showPicture) {
    return (
      <div className='card' onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl}></img>
      </div>
    )
  } else {
    let statsDisplay = Object.entries(props.stats).map(([key, value]) => (
      <p key={key}>
        {key}: {value}
      </p>
    ))
    return (
      <div className='card' onClick={toggleCard}>
        <h2>{props.name}</h2>
        <p>{props.team}</p>
        <p>{props.position}</p>
        <p>{statsDisplay}</p>
      </div>
    )
  }
}

function App() {
  return <>{cards}</>
}

export default App
