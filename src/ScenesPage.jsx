import { useState } from "react";
import SequenceTitleCard from "./SequenceTitleCard";
import "./ScenesPage.css"
import ProjectName from "./ProjectName";
import Scenes from "./Scenes";

export default function ScenesPage({s, text, project}){

  return(
    <main className="ScenesPage">
      <ProjectName project={project} s={s} on={true}/>
      <p>HEllo</p>
      <SequenceTitleCard title={text.title} summary={text.summary} />
      <Scenes />
    </main>
  )
}
