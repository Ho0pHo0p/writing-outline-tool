import "./PlotMarker.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

export default function PlotMarker({plotMarker, markerText, toggleMarker}){
  return(
    <>
      {plotMarker === true && <FontAwesomeIcon className="Marker" icon={faStarOfLife} onMouseEnter={toggleMarker} onMouseLeave={toggleMarker}/>}
    </>
  )
}