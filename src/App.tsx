import { useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import BottomBar from './Components/BottomBar'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'

const allPages = ['Home', 'About', 'Projects', 'Contact'] as const
type PageTuple = typeof allPages
type Page = PageTuple[number]

function App() {

  const [page, setPage] = useState<Page>('Home')

  const MainSection:JSX.Element = page === 'Home' ? <HomePage /> : page === 'About' ? <AboutPage /> : page === 'Projects' ? <ProjectsPage /> : <ContactPage />

  return (
    <div className="App">
      <div className="NavBarDiv">
        <NavigationBar 
          setPage={setPage}
          allPages={allPages}
        />
      </div>
      <div className="MainSection">
        {MainSection}
      </div>
      <div className="Footer">
        <BottomBar />
      </div>
    </div>
  )
}

export default App
export type { Page }
