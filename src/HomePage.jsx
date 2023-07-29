import AddProject from "./AddProject"
import "./HomePage.css"

export default function Home({project, updateProject, updateProjects, updatePage}){
  return(
    <main className="Home">
      <h2>Your Project</h2>
      <AddProject placeholder={"The Next Great American Novel..."} project={project} updateProject={updateProject} updateProjects={updateProjects} updatePage={updatePage}/>
    </main>
  )
}