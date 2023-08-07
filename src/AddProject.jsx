import "./AddProject.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
import { useState } from "react"
import { sequenceArray } from "./sequenceData"

export default function AddProject({placeholder, updatePage, updateProject, project}){
  const [formData, setFormData] = useState({
    project: "",
    id: "",
    sequences: [...sequenceArray]
  })

  const handleChange = (e) => {
    setFormData(currData => {
      return ({
        ...currData, 
        [e.target.name]: e.target.value,
        id: uuid()
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(formData);
    updatePage();
  }

  return(
    <form className="AddProject" onSubmit={handleSubmit}>
      <label htmlFor="project"></label>
      <input 
        type="text" 
        placeholder={placeholder}
        name="project"
        id="project"
        onChange={handleChange}
        value={formData.project}
        required
      ></input>
      <button><FontAwesomeIcon icon={faPenFancy} /></button>
    </form>
  )
}