import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import "./FilterMenu.css"

export default function FilterMenu ({sortAscending, sortDescending}) {
  return(
    <div className="FilterMenu">
      <button onClick={sortDescending} ><FontAwesomeIcon icon={faArrowUp}/></button>
      <button onClick={sortAscending} ><FontAwesomeIcon icon={faArrowDown}/></button>
    </div>
  )
}