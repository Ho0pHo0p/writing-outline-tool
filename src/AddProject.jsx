import "./AddProject.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'

export default function AddProject({placeholder}){
  return(
    <form className="AddProject">
      <input type="text" placeholder={placeholder}></input>
      <button><FontAwesomeIcon icon={faPenFancy}/></button>
    </form>
  )
}