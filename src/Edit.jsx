import "./Edit.css"
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Edit(){
  return(
    <>
      <FontAwesomeIcon className="Edit" icon={faPen} />
    </>
  )
}