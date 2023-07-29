import SequenceCard from "./SequenceCard"
import ProjectName from "./ProjectName";
import "./SequencesPage.css"
import { sequenceArray } from "./sequenceData.jsx"
import { sampleSequencesArray } from "./sampleSquencesData";

export default function Sequences({}){
  return(
    <main className="sequences">
      <ProjectName />
      {sequenceArray.map((s) => (
        <SequenceCard key={s.id} seq={s} sampleText={sampleSequencesArray[s.seqNum - 1]} />
      ))}
    </main>
  );
}