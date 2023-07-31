import Project from "./Project"
import "./Menu.css"

export default function Menu ({projectList, updateSelectedProj, selectedProject}){
  return(
    <ul className="Menu">
      {projectList.map((p) => (
        <Project key={p.id} project={p} updateSelectedProj={updateSelectedProj} selectedProject={selectedProject}/>
      ))}
    </ul>
  )
}