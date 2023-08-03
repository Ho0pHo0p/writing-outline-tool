import "./SceneCard.css"

export default function SceneCard({scene}){
  return(
    <div className="SceneCard">
      <p id="sceneNumber">{scene.number}</p>
      <h3>{scene.slugline}</h3>
      <p id="sceneSummary">{scene.summary}</p>
    </div>
  )
}