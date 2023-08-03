
export default function Title({placeholder='Title', style, num, project, handleChange, data}){

  return(
    <>
      <label htmlFor={`sequence${num}-${project.id}-title`}></label>
      <input onChange={ e=>{ handleChange(e, num) 
      }}  name='title' id={`sequence${num}-${project.id}`} type="text" placeholder={placeholder} style={style} value={data}>
      </input>
    </>
  )
}