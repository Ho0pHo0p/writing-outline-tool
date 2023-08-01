import "./Sidebar.css"
import Menu from "./Menu"
import AddProject from "./AddProject"

export default function Sidebar({projects, addProject, updateProject, currentProject, seqData, resetSequence, displaySequences}){
  return(
    <aside className="Sidebar">
      <AddProject  addProject={addProject} placeholder={"Add New Project"} updateProject={updateProject} seqData={seqData} resetSequence={resetSequence}/>
      <Menu projects={projects} updateProject={updateProject} currentProject={currentProject} resetSequence={resetSequence} displaySequences={displaySequences} />
    </aside>
  ) 
}