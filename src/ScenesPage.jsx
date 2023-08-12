import SequenceTitleCard from "./SequenceTitleCard";
import "./ScenesPage.css"
import ProjectName from "./ProjectName";
import Scenes from "./Scenes";
import MobileScenes from "./MobileScenes"

export default function ScenesPage({s, text, currentSeq, updatePage, updateProject, addScene, project, saveProject, addSequence, window}){
  let title;
  let summary;
  
  if(!text.title){
    title = currentSeq.placeHoldTitle
  } else {
    title = text.title
  }

  if(!text.summary){
    summary = currentSeq.placeHoldSum
  } else {
    summary= text.summary
  }

  return(
    <main className="ScenesPage">

      <ProjectName project={project} s={s} on={true} updatePage={updatePage} updateProject={updateProject} saveProject={saveProject} currentSeq={currentSeq} addSequence={addSequence}/>
      
      <SequenceTitleCard title={title} summary={summary} seq={s} />

      {window < 800 ? <MobileScenes addScene={addScene} currentSeq={currentSeq} /> :<Scenes addScene={addScene} currentSeq={currentSeq} />}
    </main>
  )
}
