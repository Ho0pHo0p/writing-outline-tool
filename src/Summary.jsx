export default function Summary({summary, placeholder='Summary'}){
  return(
    <textarea placeholder={placeholder} defaultValue={summary}></textarea>
  )
}