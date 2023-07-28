import "./Marker.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

export default function Marker(){
  return(
    <>
      <FontAwesomeIcon className="Marker" icon={faStarOfLife}/>
    </>
  )
}