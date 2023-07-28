import SequenceCard from "./SequenceCard"
import "./Sequences.css"
import { sequenceArray } from "./sequenceData.jsx"
import { useState } from 'react'

export default function Sequences(){
  return(
    <div className="sequences">
      {sequenceArray.map((s) => (
        <SequenceCard key={s.id} seq={s} />
      ))}
    </div>
  );
}