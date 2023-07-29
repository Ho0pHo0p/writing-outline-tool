export default function Summary({summary, placeholder='And then a surprising turn of events...'}){
  return(
    <textarea placeholder={placeholder} defaultValue={summary}></textarea>
  )
}