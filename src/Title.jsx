
export default function Title({placeholder='Title', style, handleSeq, num, currentProject, formData, save, seq}){
  const valueObject = formData.filter((s)=> s.seqNum === num)[0];
  let value = valueObject.title
  const seqs = currentProject.sequences;
  const thisSeq = seqs.filter((s) => s.seqNum === num)[0]

  const handleChange = (e) => {
    handleSeq(e, num, currentProject)
  }

  const handleSave = () => {
    save(currentProject)
  }

  const findValue = () => {
   console.log(value)
  }

  return(
    <>
      <label htmlFor={`sequence${num}-${currentProject.id}-title`}></label>
      <input onChange={handleChange} onBlur={handleSave}name="title" id={`sequence${num}-${currentProject.id}`} type="text" placeholder={placeholder} defaultValue={seq.title} style={style} value={value} >
      </input>
    </>
  )
}