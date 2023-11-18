import { useState } from 'react'
import './App.css'

const App = () => {
  const [temp,Settemp] = useState(10)
  const [tempColor,SettempColor] = useState('cold')

  function tempRise(){
    const newTemp = temp < 30 ? temp+1 : temp
    if(newTemp >= 15){
      SettempColor('hot')
    }
    Settemp(newTemp)
  }


  function tempDrop(){
    const newTemp = temp == 0 ? temp : temp - 1
    if(newTemp < 15){
      SettempColor('cold')
    }
    Settemp(newTemp)
  }
  return(
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`}>{temp}°C</div>
        </div>
        <div className='button-container'>
          <button onClick={tempRise}>+</button>
          <button onClick={tempDrop}>-</button>
        </div>
    </div>
  )
}

export default App
