import "./ProjectName.css"

export default function ProjectName({selectedProject}) {
  return(
    <div className="ProjectName">
      <a><h2>{selectedProject}</h2></a>
    </div>
  )
}