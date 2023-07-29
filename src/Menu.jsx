import Project from "./Project"
import "./Menu.css"

export default function Menu ({projectList}){
  return(
    <ul className="Menu">
      {projectList.map((p) => (
        <Project key={p.id} project={p}/>
      ))}
    </ul>
  )
}