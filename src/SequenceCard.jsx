import "./SequenceCard.css"
import Marker from "./Marker"
import Info from "./Info"

export default function SequenceCard(){
  return (
    <section className="sequenceCard">
      <Marker />
      <Info />
      <input type="text" placeholder="Home sweet home" maxLength="30"></input>
      <textarea placeholder="Dorothy is in Kansas"></textarea>
      <p>1</p>
    </section>
  )
}