import { compareNums } from "./utils"
export default function Title({placeholder='Title', style, handleChange, id, currentProject}){
  console.log(id)
  console.log(`sequence${id}-${currentProject.id}`)
  return(
    <>
      <label htmlFor={`sequence${id}-${currentProject.id}`}></label>
      <input onChange={handleChange} name="title" id={`sequence${id}-${currentProject.project}`} type="text" placeholder={placeholder} style={style} ></input>
    </>
  )
}