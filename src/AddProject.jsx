import "./AddProject.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
import { useState } from "react"
import { sequenceArray } from "./sequenceData"

export default function AddProject({placeholder, addProject, updatePage, page, updateProject, resetSequence, seqData}){
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

  const handleSubmit = () => {
    resetSequence()
    addProject(formData);
    updateProject(formData);
    setFormData({project:"", id:"", sequences: seqData});
    if(page ==='home'){
      updatePage();
    }
  }

  return(
    <form className="AddProject" onSubmit={e => {
      e.preventDefault();
      handleSubmit();
      }}>
      <label htmlFor="project"></label>
      <input 
        type="text" 
        placeholder={placeholder}
        name="project"
        id="project"
        onChange={handleChange}
        value={formData.project}
      ></input>
      <button><FontAwesomeIcon icon={faPenFancy} /></button>
    </form>
  )
}