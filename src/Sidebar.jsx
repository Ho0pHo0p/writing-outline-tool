import "./Sidebar.css"
import Menu from "./Menu"
import AddProject from "./AddProject"

export default function Sidebar({project, updateProject, updateProjects, updatePage, projectList, updateSelectedProj, selectedProject}){
  return(
    <aside className="Sidebar">
      <AddProject project={project} updateProject={updateProject} updateProjects={updateProjects} updatePage={updatePage} />
      <Menu projectList={projectList} updateSelectedProj={updateSelectedProj} selectedProject={selectedProject}/>
    </aside>
  ) 
}