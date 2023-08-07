import "./Body.css"
import Sequences from "./SequencesPage"
import SequencesMobile from "./MobileSequencesPage"
import Home from "./HomePage"
import MobileHome from "./MobileHomePage"
import Scenes from "./ScenesPage"
import { useState, useEffect } from "react"
import { filterArray } from "./utils"

export default function Body({window}){
  const [page, setPage] = useState('home');
  const [project, setProject] = useState({})
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

        {/* mobile */}
       {page === 'home' && window < 660 && <MobileHome updatePage={updatePageSequences} page={page} updateProject={updateProject} project={project} />}

      {/* desktop */}
      {page === 'home' && window >= 660 && <Home updatePage={updatePageSequences} page={page} updateProject={updateProject} project={project}  />}
      
      {/* mobile */}
      {page === 'sequences' && window < 800 && <SequencesMobile project={project} saved={projectData} updatePage={updatePageScenes} save={saveProject} updateSeq={updateCurrentSeq} updateProject={updateProject}/>}

      {/* desktop */}
      {page === 'sequences' && window >= 800 && <Sequences project={project} saved={projectData} updatePage={updatePageScenes} save={saveProject} updateSeq={updateCurrentSeq} updateProject={updateProject}/>}

      {page === 'scenes' && <Scenes project={project} s={currentSeq} updatePage={updatePageSequences} text={currentSeq[currentSeq.seqNum]} updateProject={updateProject} addScene={addScenesToSequence} currentSeq={currentSeq} saveProject={saveProject} addSequence={addSequenceToSequences} window={window}/>}
    </section>
  )
}