import SequenceCard from "./SequenceCard"
import "./SequencesPage.css"
import ProjectName from "./ProjectName";
import SaveButton from "./SaveButton";
import { useState } from "react"


export default function Sequences({currentProject, addProject, save, handleChange, seqData}){
  
  return(
    <main className="sequences">
      <form>
        <ProjectName currentProject={currentProject}/>
          <SaveButton />
          {seqData.map((s) => (
            <SequenceCard key={s.id} seq={s} handleChange={handleChange} currentProject={currentProject} addProject={addProject} seqData={seqData} save={save}/>
          ))}
      </form>
    </main>
  );
}