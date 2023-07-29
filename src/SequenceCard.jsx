import "./SequenceCard.css"
import PlotMarker from "./PlotMarker"
import Number from "./Number"
import Title from "./Title"
import Summary from "./Summary"
import Edit from "./Edit"
import { useState } from "react"
import PlotMarkerAlert from "./PlotMarkerAlert"

export default function SequenceCard({seq}){

  const [marker, setMarkerShow] = useState(false);
  const toggleMarker = (marker) => {
  setMarkerShow(prevMarker => {
    return !prevMarker
  })
  }
  
  return (
    <section className="sequenceCard">
      <PlotMarker plotMarker={seq.marker}toggleMarker={toggleMarker}/>
      {marker && <PlotMarkerAlert message={seq.markerText} />}
      <Number num={seq.seqNum}/>
      <Edit />
      <Summary summary={seq.summary} placeholder={seq.placeHoldSum}/>
      <Title title={seq.title} placeholder={seq.placeHoldTitle}/>
    </section>
  )
}