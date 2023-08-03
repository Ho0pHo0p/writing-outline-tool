import AddScene from "./AddScene"
import SceneCard from "./SceneCard";
import "./Scenes.css"
import { useState } from "react";

export default function Scenes(){
  const [sceneData, setSceneData] = useState([]);

  const updateScenes = (scene) => {
    setSceneData(currData => {
      return [...currData, scene]
    })
  }

  return (
    <div className="Scenes">
      <AddScene updateScenes={updateScenes}/>
      {sceneData.map((s) => {
        return(
        <SceneCard scene={s} />
    )})}
    </div>
  )
}