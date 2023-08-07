import SequenceCard from "./SequenceCard"
import "./MobileSequencesPage.css"
import ProjectName from "./ProjectName";
import { useState } from "react"
import { filterArray, filterSegment } from "./utils";


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
    <main className="sequencesMobile">
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