import "./Body.css"
import Sequences from "./SequencesPage"
import Home from "./HomePage"
import Scenes from "./ScenesPage"
import { useState } from "react"
import { filterArray } from "./utils"

export default function Body(){
  const [page, setPage] = useState('home');
  const [project, setProject] = useState({});
  const [projectData, setProjectData] = useState(false);
  const [currentSeq, setCurrentSeq] = useState({});


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
      return {...prevProject, sequences: [...sequenceData ]}
    }) 
    setProjectData(true)
  }

  const updateCurrentSeq = (seq) =>{
    setCurrentSeq({...seq})
  }

  const addScenesToSequence = (sceneData) => {
    setCurrentSeq(prevSeq => {
      return {...prevSeq, scenes: [...sceneData]}
    })
  }

  const addSequenceToSequences = (project, seq) => {
    const filteredSequences = filterArray(project.sequences, seq.seqNum);
    setProject(prevProject => {
      return {...prevProject, sequences: [...filteredSequences, {...seq}]}
    })
  }





  return(
    <section className="Body">
      {page === 'home' && <Home updatePage={updatePageSequences} page={page} updateProject={updateProject} />}
      {page === 'sequences' && <Sequences project={project} saved={projectData} updatePage={updatePageScenes} save={saveProject} updateSeq={updateCurrentSeq}/>}
      {page === 'scenes' && <Scenes project={project} s={currentSeq} updatePage={updatePageSequences} text={currentSeq[currentSeq.seqNum]} updateProject={updateProject} addScene={addScenesToSequence} currentSeq={currentSeq} saveProject={saveProject} addSequence={addSequenceToSequences }/>}
    </section>
  )
}