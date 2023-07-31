import SequenceCard from "./SequenceCard"
import "./SequencesPage.css"
import ProjectName from "./ProjectName";
import SaveButton from "./SaveButton";
import { sampleSequencesArray } from "./sampleSquencesData";
import { useState } from "react"


export default function Sequences({currentProject}){
  const [formData, setFormData] = useState({
    title: "",
    summary: ""
  }); 
  const sequences = currentProject.sequences

  const handleChange = (e) => {
    setFormData(currData => {
      return {
        ...currData, 
        [e.target.name]: e.target.value
      }
    })
  }

  return(
    <main className="sequences">
      <form>
        <ProjectName currentProject={currentProject}/>
          <SaveButton />
          {sequences.map((s) => (
            <SequenceCard key={s.id} seq={s} handleChange={handleChange} currentProject={currentProject}/>
          ))}
      </form>
    </main>
  );
}