import "./Number.css"

export default function Number({num, toggleSample, style}){
  return(
    <>
      <button type="button" className="Number" onClick={toggleSample} style={style}>{num}</button>
    </>
  )
}