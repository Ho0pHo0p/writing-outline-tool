import "./Header.css"

export default function Header(){
  const refresh = () => window.location.reload(true)


  return (
    <header className="header">
      <h1 onClick={refresh}>8 Sequences</h1>
    </header>
  )
}