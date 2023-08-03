import SequenceCard from "./SequenceCard"
import "./SequencesPage.css"
import ProjectName from "./ProjectName";
import SaveButton from "./SaveButton";
import { useState } from "react"
import { filterArray, filterSegment } from "./utils";
import { sequenceArray } from "./sequenceData";


export default function Sequences({project, updatePage, save, updateSeq}){

  const [formData, setFormData] = useState(project.sequences)
  const seqData = project.sequences;

  const handleChange = (e, num) => {
    setFormData(currentData => {
      const sequence = filterSegment(currentData, num);
      const text = sequence[num]
      const filteredData = filterArray(currentData, num);
      return [...filteredData, {...sequence, [num]: {...text, [e.target.name]: e.target.value}}]
    })
    save(formData)
  }

  return(
    <main className="sequences">
      <form>
        <ProjectName project={project} on={false}/>
          <SaveButton save={save} data={formData}/>
          {seqData.map((s) => (
            <SequenceCard key={s.id} num={s.seqNum} seq={s} handleChange={handleChange} project={project} data={formData} updatePage={updatePage} updateSeq={updateSeq} />
          ))}
      </form>
    </main>
  );
}