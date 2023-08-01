import "./Project.css"

export default function Project({currentProject, project, updateProject, displaySequences, resetSequence}){
  const style = {color: 'var(--second-bg)'}
  const defaultStyle = {color: 'var(--accent-color)'}

  const handleClick = () => {
    updateProject(project);
    resetSequence()
  }

  return(
    <a className="Project" >
      <li onClick={handleClick} style={project.id === currentProject.id ? style : defaultStyle}>
        {project.project}
      </li>
    </a>
  )
}
