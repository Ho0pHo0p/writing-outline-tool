import "./AddProject.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'

export default function AddProject({placeholder, project, updateProject, updateProjects, updatePage}){
  return(
    <form className="AddProject">
      <input type="text" placeholder={placeholder} value={project} onChange={updateProject}></input>
      <button onClick={ e => {
        updateProjects(e);
        updatePage(e);
      }}><FontAwesomeIcon icon={faPenFancy}/></button>
    </form>
  )
}