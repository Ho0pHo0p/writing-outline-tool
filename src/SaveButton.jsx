import "./SaveButton.css"

export default function SaveButton({ save, data}){
  return(
    <div  className="SaveButton">
      <button onClick={e=>{
        e.preventDefault();
        save(data)
      }}>Save</button>
    </div>
  )
}