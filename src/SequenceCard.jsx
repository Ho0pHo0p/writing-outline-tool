import "./SequenceCard.css"
import PlotMarker from "./PlotMarker"
import Number from "./Number"
import Title from "./Title"
import SampleTitle from "./SampleTitle"
import Summary from "./Summary"
import SampleSummary from "./SampleSummary"
import Edit from "./Edit"
import { useState } from "react"
import PlotMarkerAlert from "./PlotMarkerAlert"


export default function SequenceCard({seq, sampleText, updateTitle, updateSummary, updateSeq, title1, title2, title3, title4, title5, title6, title7, title8,  summary1, summary2, summary3, summary4, summary5, summary6, summary7, summary8}){
  const [marker, setMarker] = useState(false);
  const [sample, setSample] = useState(false);
  
  const toggleMarker = (marker) => {
    setMarker(prevMarker => {
    return !prevMarker
  })
  }
  const toggleSample = (sample) => {
    setSample(prevSample => {
      return !prevSample
    })
  }

  const sampleStyle = {
    backgroundColor: '#D9D9D9',
    color: 'var(--main-bg)'
  }
  const defaultStyle = {
    backgroundColor: 'var(--second-bg)',
    color: 'var(--main-bg)'
  }
  
  return (
    <section className="sequenceCard" style={sample? sampleStyle : defaultStyle}>
      {sample? <PlotMarker plotMarker={seq.marker} toggleMarker={toggleMarker} style={sampleStyle} /> : <PlotMarker plotMarker={seq.marker} toggleMarker={toggleMarker}/>}

      {marker && <PlotMarkerAlert message={sampleText.markerText} />}

      {sample? <Number num={seq.seqNum} toggleSample={toggleSample} style={sampleStyle}/> : <Number num={seq.seqNum} toggleSample={toggleSample} />}
      <Edit />
      {sample? <SampleSummary summary={sampleText.summary} style={sampleStyle}/> : <Summary  updateSummary={updateSummary} num={seq.seqNum} placeholder={seq.placeHoldSum} updateSeq={updateSeq} summary1={summary1} summary2={summary2} summary3={summary3} summary4={summary4} summary5={summary5} summary6={summary6} summary7={summary7} summary8={summary8} />}

      {sample ? <SampleTitle title={sampleText.title} sampleOn={sample} style={sampleStyle}/> : <Title num={seq.seqNum}updateTitle={updateTitle} updateSeq={updateSeq} title1={title1} title2={title2} title3={title3} title4={title4} title5={title5} title6={title6} title7={title7} title8={title8} />}
    </section>
  )
}