import AddProject from "./AddProject"
import "./Home.css"

export default function Home(){
  return(
    <section className="Home">
      <h2>Your Project</h2>
      <AddProject placeholder={"The Next Great American Novel..."}/>
    </section>
  )
}