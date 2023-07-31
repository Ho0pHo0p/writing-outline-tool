import { compareNums } from "./utils"

export default function Summary({summary, placeholder='And then a surprising turn of events...', style, updateSummary, num, updateSeq, summary1, summary2, summary3, summary4, summary5, summary6, summary7, summary8}){
  return(
    <textarea placeholder={placeholder} value={compareNums(num, summary1, summary2, summary3, summary4, summary5, summary6, summary7, summary8)} style={style} onChange={e =>{
      updateSummary(e,num)
    }} onBlur={updateSeq} ></textarea>
  )
}