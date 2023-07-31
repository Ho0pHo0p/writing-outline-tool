import SequenceCard from "./SequenceCard"
import "./SequencesPage.css"
import ProjectName from "./ProjectName";
import SaveButton from "./SaveButton";
import { sampleSequencesArray } from "./sampleSquencesData";
import { useState } from "react"

export default function Sequences({ selectedProject ,sequences, updateTitle, updateSummary, title1, title2, title3, title4, title5, title6, title7, title8, summary1, summary2, summary3, summary4, summary5, summary6, summary7, summary8, updateSeq }){
  return(
    <main className="sequences">
      <form>
        <ProjectName selectedProject={selectedProject}/>
          <SaveButton updateSeq={updateSeq}/>
          {sequences.map((s) => (
            <SequenceCard key={s.id} seq={s} sampleText={sampleSequencesArray[s.seqNum - 1]} updateTitle={updateTitle} updateSummary={updateSummary} updateSeq={updateSeq} title1={title1} title2={title2} title3={title3} title4={title4} title5={title5} title6={title6} title7={title7} title8={title8} summary1={summary1} summary2={summary2} summary3={summary3} summary4={summary4} summary5={summary5} summary6={summary6} summary7={summary7} summary8={summary8}/>
          ))}
      </form>
    </main>
  );
}