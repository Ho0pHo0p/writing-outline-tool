import "./PlotMarkerAlert.css"

export default function PlotMarkerAlert({message}){
  return(
    <span className="PlotMarkerAlert">
      <p>{message}</p>
    </span>
  )
}