import './App.css'
import Header from './Header'
import Body from "./Body"
import { useEffect, useState } from 'react'

function App() {
 const [windowWidth, setWindowWidth] = useState(window.innerWidth)


 useEffect(()=> {
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize)
  }
 });

  return (
    <>
      <Header />
      <Body window={windowWidth} />
    </>
  )
}

export default App
