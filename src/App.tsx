import './App.css'
import NavigationBar from './Components/NavigationBar'

function App() {

  return (
    <div className="App">
      <div className="NavBarDiv">
        <NavigationBar />
      </div>
      <div className="MainSection">
        <span>Content goes here</span>
      </div>
    </div>
  )
}

export default App
