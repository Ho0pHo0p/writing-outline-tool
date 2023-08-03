import "./AddScene.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { v4 as uuid } from "uuid"


export default function AddScene({updateScenes, addScene, sceneData}){
  const [formData, setFormData] = useState({
    number: 1,
    slugline: "",
    summary: "", 
    id: uuid()
  })

  const handleChange = (e) => {
    setFormData(currData => {
      return {...currData, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(prevFormData => {
      return {
        number: prevFormData.number + 1,
        slugline: "",
        summary: "",
        id: uuid()
      }
    })
  
  }


  return(
    <form className="AddScene" onSubmit={e=> {
      handleSubmit(e)
      updateScenes(formData)
      }} onBlur={e=> {addScene(sceneData)}}>
      <label htmlFor="number"></label>
      <input onChange={handleChange} id="number" placeholder="1" type="number" name="number" value={formData.number}  ></input>
      <label htmlFor="slugline"></label>
      <input onChange={handleChange} id="slugline" placeholder="EXT. OZ - DAY " name="slugline" value={formData.slugline} ></input>
      <label htmlFor="sceneSummary"></label>
      <textarea onChange={handleChange}  id="sceneSummary" placeholder="Dorothy meets the Cowardly Lion..." name="summary" value={formData.summary}  ></textarea>
      <button><FontAwesomeIcon icon={faPlus} /></button>
    </form>
  )
}