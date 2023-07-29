import "./Body.css"
import Sequences from "./Sequences"
import Sidebar from "./Sidebar"
import Home from "./Home"
import { useState } from "react"

export default function Body(){
  const [page, setPage] = useState('home')


  return(
    <section className="body">
      {page === 'home' && <Home />}
      {page === 'sequences' && 
        <Sequences /> &&
        <Sidebar /> 
      }
      {page === 'scenes'}
    </section>
  )
}