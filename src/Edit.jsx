import "./Edit.css"
import { faPen, faPenFancy, faPenToSquare, faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Edit(){
  return(
    <button className="Edit" >
      <FontAwesomeIcon icon={faPenFancy} />
    </button>


  )
}