import "./Body.css"
import Sequences from "./SequencesPage"
import Project from "./Project"
import Sidebar from "./Sidebar"
import Home from "./HomePage"
import Scenes from "./ScenesPage"
import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { updateInput, updateSeqInput } from "./utils"
import { sequenceArray } from "./sequenceData"

export default function Body(){
  const [page, setPage] = useState('home');
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({})
  

  const updatePageSequences = () => {
    setPage('sequences');
  }
  const updatePageScenes = () => {
    setPage('scenes')
  }
  
  const addProject = (project) => {
    setProjects(currProjects => {
      return [...currProjects, {...project}]
    })
  }

  const updateCurrentProject = (project) => {
    setCurrentProject({...project})
  }

  return(
    <section className="Body">
      {page === 'home' && <Home updatePage={updatePageSequences} addProject={addProject} page={page} updateProject={updateCurrentProject}/>}
      {page === 'sequences' && <Sidebar  addProject={addProject} projects={projects} updateProject={updateCurrentProject} currentProject={currentProject} />}
      {page === 'sequences' && <Sequences  currentProject={currentProject} />}
      {page === 'scenes' && <Sidebar />}
      {page === 'scenes' && <Scenes />}
    </section>
  )
}