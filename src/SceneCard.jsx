import "./SceneCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function SceneCard({scene, remove}){

  const handleClick = () => {
    remove(scene)
  }

  return(
    <div className="SceneCard">
      <p id="sceneNumber">{scene.number}</p>
      <h3>{scene.slugline}</h3>
      <p id="sceneSummary">{scene.summary}</p>
      <FontAwesomeIcon id="x" icon={faXmark} onClick={handleClick} />
    </div>
  )
}