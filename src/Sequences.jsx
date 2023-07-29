import SequenceCard from "./SequenceCard"
import "./Sequences.css"
import { sequenceArray } from "./sequenceData.jsx"

export default function Sequences(){
  return(
    <section className="sequences">
      {sequenceArray.map((s) => (
        <SequenceCard key={s.id} seq={s} />
      ))}
    </section>
  );
}