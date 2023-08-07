import AddProject from "./AddProject"
import "./HomePage.css"
import EightSequencesInfo from "./EightSequencesInfo"

export default function Home({updatePage, updateProject, project}){

  return(
    <main className="Home">
      <h2>Your Project</h2>
      <AddProject placeholder={"The Next Great American Novel..."} updatePage={updatePage} updateProject={updateProject} project={project} /> 
      < EightSequencesInfo />
    </main>
  )
}

