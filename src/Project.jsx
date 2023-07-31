import "./Project.css"

export default function Project({currentProject, project, updateProject}){
  const style = {color: 'var(--second-bg)'}
  const defaultStyle = {color: 'var(--accent-color)'}

  const handleClick = (e) => {
    updateProject(project)
  }

  return(
    <a className="Project" >
      <li onClick={handleClick} style={project.id === currentProject.id ? style : defaultStyle}>
        {project.project}
      </li>
    </a>
  )
}
