import SequencesMenu from "./SequencesMenu"
import "./Project.css"

export default function Project({project, updateSelectedProj, selectedProject}){
  const defaultStyle = {color: 'var(--accent-color)'}
  const clickStyle = {color: 'var(--second-bg)'}
  return(
    <a className="Project">
      <li style={selectedProject === project.project?clickStyle : defaultStyle} onClick={updateSelectedProj}>
        {project.project}
        <SequencesMenu />
      </li>
    </a>
  )
}