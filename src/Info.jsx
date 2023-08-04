import "./Info.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

export default function Info({ toggleSample, style}){
  return(
    <>
      <button type="button" className="Info" onClick={toggleSample} style={style}><FontAwesomeIcon icon={faInfoCircle}/></button>
    </>
  )
}