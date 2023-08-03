import "./AddScene.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function AddScene({updateScenes}){
  const [formData, setFormData] = useState({
    number: 1,
    slugline: "",
    summary: ""
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
        summary: ""
      }
    })
  }

  return(
    <form className="AddScene" onSubmit={e=> {
      handleSubmit(e)
      updateScenes(formData)
      }}>
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