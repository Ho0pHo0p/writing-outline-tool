import "./ProjectName.css"

export default function ProjectName({currentProject}) {
  return(
    <div className="ProjectName">
      <a><h2>{currentProject.project}</h2></a>
    </div>
  )
}