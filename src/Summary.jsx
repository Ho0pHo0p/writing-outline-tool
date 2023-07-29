export default function Summary({summary, placeholder='And then a surprising turn of events...', style}){
  return(
    <textarea placeholder={placeholder} defaultValue={summary} style={style}></textarea>
  )
}