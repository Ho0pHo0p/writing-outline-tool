import "./Sidebar.css"
import AddProject from "./AddProject"

export default function Sidebar(){
  return(
    <aside className="Sidebar">
      <AddProject />
      <h3>Projects</h3>
    </aside>
  )
}