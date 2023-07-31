import "./SaveButton.css"

export default function SaveButton({updateProject, save}){
  return(
    <div  className="SaveButton">
      <button onClick={e=>{
        e.preventDefault();
        save()
      }}>Save</button>
    </div>
  )
}