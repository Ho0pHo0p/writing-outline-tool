import "./SequenceTitleCard.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function SequenceTitleCard ({title, summary}){
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return(
    <div onClick={handleClick} className="SequenceTitleCard">
      <div>
      {expanded ? <FontAwesomeIcon icon={faChevronUp} className="chevron"/> : <FontAwesomeIcon icon={faChevronDown} className="chevron"/> }
      <h2>{title}</h2>
      </div>
      {expanded && <p>{summary}</p>}

    </div>
  )
}