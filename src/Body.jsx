import "./Body.css"
import { sequenceArray } from "./sequenceData"
import Sequences from "./SequencesPage"
import Sidebar from "./Sidebar"
import Home from "./HomePage"
import Scenes from "./ScenesPage"
import { useState } from "react"
import { v4 as uuid } from 'uuid'

export default function Body(){
  const [page, setPage] = useState('home');
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [sequenceInfo, setSequenceInfo] = useState();
  const [sequences, setSequences] = useState(sequenceArray);

  const updatePageSequences = (e) => {
    e.preventDefault();
    setProjectName('');
    setPage('sequences');
  }

  const updatePageScenes = (e) => {
    e.preventDefault();
    setPage('scenes')
  }

  const updateProjects = (e) => {
    setProjects(prevProjects => {
      e.preventDefault();
      console.log(prevProjects)
      let projectsArray = [...prevProjects, {project:projectName, id:uuid(), sequences:{}}]
      return projectsArray
  })}

  const updateProjectName = (e) => {
    setProjectName(e.target.value);
  }

  const updateSequenceInfo = () => {
    setSequenceInfo(prevSequenceInfo => (
      {
        id: this.id,
        title: seqTitle, 
        summary: seqSummary,
        seqNum: this.seqNum,
        marker: this.marker,
        markerOn: this.markerOn
      }
    ))
  }

  const updateSequences = () => {
    setSequences(prevSequences => {
      const filteredSeq = prevSequences.filter((seq)=> seq.id === sequenceInfo.id )
      return [...filteredSeq, sequenceInfo]
    })
  }


  return(
    <section className="Body">
      {page === 'home' && <Home project={projectName} updateProject={updateProjectName} updateProjects={updateProjects} updatePage={updatePageSequences}/>}
      {page === 'sequences' && <Sidebar project={projectName} updateProject={updateProjectName} updateProjects={updateProjects} updatePage={updatePageSequences} projectList={projects}/>}
      {page === 'sequences' && <Sequences />}
      {page === 'scenes' && <Sidebar />}
      {page === 'scenes' && <Scenes />}
    </section>
  )
}