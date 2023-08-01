import { compareNums } from "./utils"
export default function Title({placeholder='Title', style, handleChange, num, currentProject, formData, save, seq}){
  const valueObject = formData.filter((s)=> s.seqNum === num);
  const value = valueObject.title

  return(
    <>
      <label htmlFor={`sequence${num}-${currentProject.id}-title`}></label>
      <input onChange={e=>{ 
        handleChange(e, num, currentProject);}} name="title" id={`sequence${num}-${currentProject.id}`} type="text" placeholder={placeholder} style={style} value={value} ></input>
    </>
  )
}