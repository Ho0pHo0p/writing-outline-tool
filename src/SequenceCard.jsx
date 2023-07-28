import "./SequenceCard.css"
import Marker from "./Marker"
import Number from "./Number"
import Title from "./Title"
import Summary from "./Summary"
import Edit from "./Edit"

export default function SequenceCard(){
  return (
    <section className="sequenceCard">
      <Marker />
      <Number />
      <Edit />
      <Summary />
      <Title />
    </section>
  )
}