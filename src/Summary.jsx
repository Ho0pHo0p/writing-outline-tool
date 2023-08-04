
export default function Summary({ placeholder, style, handleChange, num, project, data}){

  return(
    <>
      <label htmlFor={`sequence${num}-${project.id}-summary`}></label>
      <textarea name="summary" id={`sequence${num}-${project.id}`} onChange={e => {handleChange(e, num)}} placeholder={placeholder} style={style} value={data}></textarea>
    </>
  )
}