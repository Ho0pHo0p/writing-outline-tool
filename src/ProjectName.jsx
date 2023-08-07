import "./ProjectName.css"

export default function ProjectName({project, s, on, updatePage, updateProject, addSequence, currentSeq }) {


  return(
    <div className="ProjectName">
      <a onClick={e => {
        addSequence(project, currentSeq)
        updateProject(project)
        updatePage()
      }}><h2>{project.project} </h2></a>
      {on && <h3> / sequence {`${s.numWritten}`}</h3>}
    </div>
  )
}