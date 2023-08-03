import "./ProjectName.css"

export default function ProjectName({project, s, on }) {


  return(
    <div className="ProjectName">
      <a><h2>{project.project} </h2></a>
      {on ? <h3> / sequence {`${s.numWritten}`}</h3> : console.log('no')}
    </div>
  )
}