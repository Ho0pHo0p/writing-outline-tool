import "./SequenceCard.css"
import PlotMarker from "./PlotMarker"
import Title from "./Title"
import Summary from "./Summary"
import Edit from "./Edit"
import { useState } from "react"
import PlotMarkerAlert from "./PlotMarkerAlert"


export default function SequenceCard({seq, num, handleChange, project, data, updatePage, updateSeq, updateData, width}){

  const [marker, setMarker] = useState(false);

  const sequenceDataTitle = (() => {
    for(let s of data){
      if(s.id === seq.id){
        const textData= s[num];
        return textData.title
      }
    }
  })();

  const sequenceDataSummary= (() => {
    for(let s of data){
      if(s.id === seq.id){
        const textData= s[num];
        return textData.summary
      }
    }
  })();


  const toggleMarker = (marker) => {
    setMarker(prevMarker => {
    return !prevMarker
  })
  }
  
  return (
    <section className={`sequenceCard sequenceCard${seq.seqNum}`}>
      <p id="number">{num}</p>

       <PlotMarker plotMarker={seq.marker} toggleMarker={toggleMarker}/>

      {marker && <PlotMarkerAlert message={seq.markerText} />}


       <Edit updatePage={updatePage} updateSeq={updateSeq} data={data} id={seq.id}/>

       <Summary handleChange={handleChange} num={num} project={project} data={sequenceDataSummary}placeholder={seq.placeHoldSum} />

       <Title handleChange={handleChange} num={num} data={sequenceDataTitle} project={project} placeholder={seq.placeHoldTitle}/>
    </section>
  )
}