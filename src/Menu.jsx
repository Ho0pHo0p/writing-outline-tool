import Project from "./Project"
import "./Menu.css"

export default function Menu ({projects, updateProject, currentProject, displaySequences, resetSequence}){
  return(
    <ul className="Menu">
      {projects.map((p) => (
        <Project key={p.id} project={p} currentProject={currentProject} updateProject={updateProject} displaySequences={displaySequences} resetSequence={resetSequence}/>
      ))}
    </ul>
  )
}