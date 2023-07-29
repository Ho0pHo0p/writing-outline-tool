
export default function Title({updateTitle, title
, placeholder='Title', style}){

  return(
    <>
      <input value={title} placeholder={placeholder}style={style} onChange={updateTitle}></input>
    </>
  )
}