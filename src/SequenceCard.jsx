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

export default function SequenceCard({seq, sampleText}){
  const [marker, setMarker] = useState(false);
  const [sample, setSample] = useState(false);
  const [seqTitle, setSeqTitle] = useState('');

  const updateSeqTitle = (e) => {
    setSeqTitle(e.target.value)
  }
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
      {sample? <SampleSummary summary={sampleText.summary} style={sampleStyle}/> : <Summary summary={seq.summary} placeholder={seq.placeHoldSum}/>}

      {sample ? <SampleTitle title={sampleText.title} sampleOn={sample} style={sampleStyle}/> : <Title title={seqTitle} updateTitle={updateSeqTitle}  />}
    </section>
  )
}