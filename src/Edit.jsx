import "./Edit.css"
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Edit({updatePage, updateSeq, data, id}){

  const updatedSequence = (() => {for(let s of data){
    if (s.id === id){
      return s 
    }
  }})();

  return(
    <button className="Edit" onClick={e=> {
      updateSeq(updatedSequence)
      updatePage()
      
    }}>
      <p>Add Scenes</p>
      <FontAwesomeIcon icon={faPenFancy} />
    </button>
  )
}