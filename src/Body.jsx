import "./Body.css"
import Sequences from "./SequencesPage"
import Home from "./HomePage"
import Scenes from "./ScenesPage"
import { useState } from "react"

export default function Body(){
  const [page, setPage] = useState('home');
  const [project, setProject] = useState({});
  const [currentSeq, setCurrentSeq] = useState({})


  const updatePageSequences = () => {
    setPage('sequences');
  }
  const updatePageScenes = () => {
    setPage('scenes')
  }

  const updateProject = (project) => {
    setProject(prevProject => {
      return {...project}
    })
  }

  const saveProject = (sequenceData) => {
    setProject(prevProject => {
      return {...prevProject, sequences: [...sequenceData]}
    }) 
  }

  const updateCurrentSeq = (seq) =>{
    setCurrentSeq({...seq})
  }

  const reloadSeq = () => {
    console.log('hellow')
    setCurrentSeq(prevSeq => {
      return {...prevSeq}
    })
  }

  return(
    <section className="Body">
      {page === 'home' && <Home updatePage={updatePageSequences} page={page} updateProject={updateProject} />}
      {page === 'sequences' && <Sequences project={project} updatePage={updatePageScenes} save={saveProject} updateSeq={updateCurrentSeq}/>}
      {page === 'scenes' && <Scenes project={project} s={currentSeq} updatePage={updatePageSequences} updateSeq={reloadSeq} text={currentSeq[currentSeq.seqNum]} />}
    </section>
  )
}