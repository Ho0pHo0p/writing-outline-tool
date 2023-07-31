import { compareNums } from "./utils"
export default function Title({placeholder='Title', style, updateTitle, num, updateSeq, title1, title2, title3, title4, title5, title6, title7, title8}){

  return(
    <>
      <input placeholder={placeholder} style={style} onChange={ e => {updateTitle(e,num)}} onBlur={e => {
        updateSeq(e, title1, title2, title3, title4, title5, title6, title7, title8)
      }} value={compareNums(num, title1, title2, title3, title4, title5, title6, title7, title8)}></input>
    </>
  )
}