import { compareNums } from "./utils"

export default function Summary({ placeholder='And then a surprising turn of events...', style, handleChange, num, currentProject, formData }){
  const valueObject = formData.filter((s)=> s.seqNum === num);
  const value = valueObject.summary

  return(
    <>
      <label htmlFor={`sequence${num}-${currentProject.id}-summary`}></label>
      <textarea name="summary"  id={`sequence${num}-${currentProject.id}`} onChange={e=>{handleChange(e, num, currentProject)}} placeholder={placeholder} style={style} value={value}></textarea>
    </>
  )
}