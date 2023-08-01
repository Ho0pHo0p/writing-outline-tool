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
  const [currentProject, setCurrentProject] = useState({project:'test', sequences:[sequenceArray]})
  const [seqFormData, setSeqFormData] = useState([...sequenceArray])

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
  const removeProject = (project) => {
    setProjects(currProjects => {
      return currProjects.filter((p)=> p === project)
    })
  }
  const updateCurrentProject = (project) => {
    setCurrentProject({...project})
  }
  const saveProjectData = (data) => {
  }
  
  const handleSequenceChange = (e, num, project) => {
    setSeqFormData(currData => {
      const editedSeq = currData.filter((s) => s.seqNum === num)[0]; 
      const filtered = currData.filter((s) => s.id !== editedSeq.id);
      console.log(filtered)
      return [
         ...filtered, 
        {...editedSeq, [e.target.name]: e.target.value}
      ]
    })

    setProjects(currProjects => {
      const filteredProjects = currProjects.filter((p) => p.id !== project.id)
      console.log(filteredProjects)
      return [...filteredProjects, {...project, sequences:[...seqFormData]}]
    })
  }

  const resetSequence = () => {
    setSeqFormData([...sequenceArray])
  }

  const sequenceDisplayForProject = () => {
    setSeqFormData(currentProject.sequences)
  }

  return(
    <section className="Body">
      {page === 'home' && <Home updatePage={updatePageSequences} addProject={addProject} page={page} updateProject={updateCurrentProject} seqData={seqFormData} resetSequence={resetSequence}/>}
      {page === 'sequences' && <Sidebar  addProject={addProject} projects={projects} updateProject={updateCurrentProject} currentProject={currentProject} resetSequence={resetSequence} displaySequences={sequenceDisplayForProject}/>}
      {page === 'sequences' && <Sequences  currentProject={currentProject} addProject={addProject} save={saveProjectData} handleChange={handleSequenceChange} seqData={seqFormData} />}
      {page === 'scenes' && <Sidebar />}
      {page === 'scenes' && <Scenes />}
    </section>
  )
}