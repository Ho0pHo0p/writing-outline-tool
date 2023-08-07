import SequenceCard from "./SequenceCard"
import "./SequencesPage.css"
import ProjectName from "./ProjectName";
import { useState } from "react"
import { filterArray, filterSegment } from "./utils";

export default function Sequences({project, updatePage, save, updateSeq, updateProject}){

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
        <ProjectName project={project} on={false} updateProject={updateProject}/>
          {seqData.map((s) => (
            <SequenceCard key={s.id} num={s.seqNum} seq={s} handleChange={handleChange} project={project} data={formData} updatePage={updatePage} updateSeq={updateSeq} />
          ))}
      </form>
    </main>
  );
}