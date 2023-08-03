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


export default function SequenceCard({seq, num, handleChange, project, data, updatePage, updateSeq, updateData}){

  const [marker, setMarker] = useState(false);
  const [sample, setSample] = useState(false);

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
    <section className={`sequenceCard sequenceCard${seq.seqNum}`} style={sample? sampleStyle : defaultStyle}>
      {sample? <PlotMarker plotMarker={seq.marker} toggleMarker={toggleMarker} style={sampleStyle} /> : <PlotMarker plotMarker={seq.marker} toggleMarker={toggleMarker}/>}

      {marker && <PlotMarkerAlert message={sampleText.markerText} />}

      {sample? <Number num={num} toggleSample={toggleSample} style={sampleStyle}/> : <Number num={num} toggleSample={toggleSample} />}

      <Edit updatePage={updatePage} updateSeq={updateSeq} data={data} id={seq.id}/>

      {sample? <SampleSummary summary={sampleText.summary} style={sampleStyle}/> : <Summary handleChange={handleChange} num={num} project={project} data={sequenceDataSummary} />}

      {sample ? <SampleTitle title={sampleText.title} sampleOn={sample} style={sampleStyle}/> : <Title handleChange={handleChange} num={num} data={sequenceDataTitle} project={project} />}
    </section>
  )
}