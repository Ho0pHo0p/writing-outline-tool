import "./PlotMarker.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'

export default function PlotMarker({plotMarker, toggleMarker, style}){
  return(
    <>
      {plotMarker === true && <FontAwesomeIcon className="Marker" icon={faThumbTack} onMouseEnter={toggleMarker} onMouseLeave={toggleMarker}  onClick={toggleMarker} style={style}/>}
    </>
  )
}