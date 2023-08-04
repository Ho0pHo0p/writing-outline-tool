import "./Edit.css"
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Edit({updatePage, updateSeq, data, id, style}){

  const updatedSequence = (() => {for(let s of data){
    if (s.id === id){
      return s 
    }
  }})();

  return(
    <button style={style}className="Edit" onClick={e=> {
      updateSeq(updatedSequence)
      updatePage()
      
    }}>
      <FontAwesomeIcon id="pen" icon={faPenFancy} />
      Add Scenes
    </button>
  )
}