import "./Sidebar.css"
import Menu from "./Menu"
import AddProject from "./AddProject"

export default function Sidebar({projects, addProject, updateProject, currentProject}){
  return(
    <aside className="Sidebar">
      <AddProject  addProject={addProject} placeholder={"Add New Project"} updateProject={updateProject}/>
      <Menu projects={projects} updateProject={updateProject} currentProject={currentProject} />
    </aside>
  ) 
}