import SequencesMenu from "./SequencesMenu"

export default function Project({project}){
  return(
    <a className="Project">
      <li>
        {project.project}
        <SequencesMenu />
      </li>
    </a>
  )
}