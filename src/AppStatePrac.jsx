import './App.css'
import Card from './components/card/card'
import { useState } from 'react';


function App() {
  const [name, setName] = useState('Bob') //name 
  const [paragraphText, setParagraphText] = useState('No text') //paragraph text
  const [light, setLight] = useState('off') //light

  const clickHandler = () => {
    setName('Dani')
  }

  const inputChangeHandler = (e) => {
    setParagraphText(e.target.value)
  }

  const lightSwitcherHandler = () => {
    if (light === 'on') {
      setLight('off')
    } else {
      setLight('on')
    }
  }

  return (
    <>
      {light === 'off' ? <p>Off</p> : <p>On</p>}
      <button onClick={lightSwitcherHandler}>Light switcher</button>


      <button onClick={clickHandler}>change name</button>
      <p>{name}</p>
      <input type="text" onChange={inputChangeHandler} />
      <p>{paragraphText}</p>
      <Card title="Samsung" />
      hello world
      <Card />
    </>
  )
}

export default App
