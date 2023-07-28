
export default function Title({title
, placeholder='Title'}){

  return(
    <>
      <input defaultValue={title} placeholder={placeholder}></input>
    </>
  )
}