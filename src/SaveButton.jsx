import "./SaveButton.css"

export default function SaveButton({updateSeq}){
  return(
    <div  className="SaveButton">
      <button onClick={e=>{
        e.preventDefault();
        updateSeq(e, num)
      }}>Save</button>
    </div>
  )
}