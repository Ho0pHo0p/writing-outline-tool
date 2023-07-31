import "./SequenceCard.css"
import PlotMarker from "./PlotMarker"
import Number from "./Number"
import Title from "./Title"
import SampleTitle from "./SampleTitle"
import Summary from "./Summary"
import SampleSummary from "./SampleSummary"
import Edit from "./Edit"
import { sampleSequencesArray } from "./sampleSquencesData"
import { useState } from "react"
import PlotMarkerAlert from "./PlotMarkerAlert"


export default function SequenceCard({seq, handleChange, currentProject}){
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

  const sampleText = sampleSequencesArray.filter((s) => (seq.seqNum === s.seq))[0];

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
      {sample? <SampleSummary summary={sampleText.summary} style={sampleStyle}/> : <Summary handleChange={handleChange} id={seq.seqNum} currentProject={currentProject}/>}

      {sample ? <SampleTitle title={sampleText.title} sampleOn={sample} style={sampleStyle}/> : <Title handleChange={handleChange} id={seq.seqNum} currentProject={currentProject} />}
    </section>
  )
}