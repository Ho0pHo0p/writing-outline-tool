import { compareNums } from "./utils"

export default function Summary({ placeholder='And then a surprising turn of events...', style, handleChange, id, currentProject }){
  return(
    <>
      <label htmlFor={`sequence${id}-${currentProject.id}`}></label>
      <textarea name="summary"  id={`sequence${id}-${currentProject.id}`} onChange={handleChange} placeholder={placeholder} style={style} ></textarea>
    </>
  )
}