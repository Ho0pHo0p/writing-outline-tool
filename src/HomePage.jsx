import AddProject from "./AddProject"
import "./HomePage.css"

export default function Home({updatePage, page, updateProject}){
  return(
    <main className="Home">
      <h2>Your Project</h2>
      <AddProject placeholder={"The Next Great American Novel..."} updatePage={updatePage} updateProject={updateProject} />
    </main>
  )
}

