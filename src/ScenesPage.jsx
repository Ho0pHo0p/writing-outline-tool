import { useState } from "react";
import SequenceTitleCard from "./SequenceTitleCard";
import "./ScenesPage.css"
import ProjectName from "./ProjectName";
import Scenes from "./Scenes";

export default function ScenesPage({s, text, currentSeq, updatePage, updateProject, addScene, project, saveProject, addSequence}){

  return(
    <main className="ScenesPage">
      <ProjectName project={project} s={s} on={true} updatePage={updatePage} updateProject={updateProject} saveProject={saveProject} currentSeq={currentSeq} addSequence={addSequence}/>
      <SequenceTitleCard title={text.title} summary={text.summary} seq={s} />
      <Scenes addScene={addScene} currentSeq={currentSeq}/>
    </main>
  )
}
