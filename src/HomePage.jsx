import AddProject from "./AddProject"
import "./HomePage.css"

export default function Home({addProject, updatePage, page, updateProject, seqData, resetSequence}){
  return(
    <main className="Home">
      <h2>Your Project</h2>
      <AddProject placeholder={"The Next Great American Novel..."} addProject={addProject} updatePage={updatePage} page={page} updateProject={updateProject} seqData={seqData} resetSequence={resetSequence}/>
    </main>
  )
}

