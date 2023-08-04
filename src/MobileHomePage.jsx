import AddProject from "./AddProject"
import "./MobileHomePage.css"

export default function Home({updatePage, page, updateProject}){
  return(
    <main className="MobileHome">
      <h2>Your Project</h2>
      <AddProject placeholder={"Title"} updatePage={updatePage} updateProject={updateProject} />
    </main>
  )
}

