import AddScene from "./AddScene"
import SceneCard from "./SceneCard";
import "./Scenes.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterMenu from "./FilterMenu";

export default function Scenes({addScene, currentSeq}){
  const [sceneData, setSceneData] = useState([...currentSeq.scenes]);
  const [sortUp, setSortUp] = useState(true)
  const sceneAscending = [...sceneData].sort((a, b) => a.number - b.number);
  const sceneDescending = [...sceneData].sort((a,b) => b.number - a.number)

  const updateScenes = (scene) => {
    setSceneData(currData => {
      return [...currData, {...scene}]
    })
  }
  const sortDescending = () => {
    setSortUp(false)
  }
  const sortAscending = () => {
    setSortUp(true)
  }

  return (
    <div className="Scenes">
      <div className="filter">
        <FilterMenu sortDescending={sortDescending} sortAscending={sortAscending}/>
      </div>
      <AddScene updateScenes={updateScenes}  addScene={addScene} sceneData={sceneData}/>
      {sortUp ? sceneAscending.map((s) => {
        return(
        <SceneCard key={s.id} scene={s} />
      )}) : sceneDescending.map((s) => {
        return(
        <SceneCard key={s.id} scene={s} />
      )})}
    </div>
  )
}