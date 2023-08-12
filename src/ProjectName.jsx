import "./ProjectName.css"

export default function ProjectName({project, s, on, updatePage, addSequence, currentSeq }) {


  return(
    <div className="ProjectName">
      <a onClick={e => {
        addSequence(project, currentSeq)
        updatePage(project)
      }}><h2>{project.project} </h2></a>
      {on && <h3> / sequence {`${s.numWritten}`}</h3>}
    </div>
  )
}