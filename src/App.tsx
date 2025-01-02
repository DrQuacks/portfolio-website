import { useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import NavigationBarMobile from './Components/NavigationBarMobile';
import BottomBar from './Components/BottomBar'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import SkillsPage from './Components/SkillsPage'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'
import useMediaQuery from '@mui/material/useMediaQuery';

const allPages = ['Home', 'About', 'Skills', 'Projects', 'Contact'] as const
type PageTuple = typeof allPages
type Page = PageTuple[number]

function App() {

  const [page, setPage] = useState<Page>('Home')
  const isMobile = useMediaQuery('(max-width:600px)');

  const MainSection:JSX.Element = page === 'Home' ? <HomePage /> : page === 'About' ? <AboutPage /> : page === 'Skills' ? <SkillsPage /> : page === 'Projects' ? <ProjectsPage /> : <ContactPage />

  return (
    <div className="App">
      <div className="NavBarDiv">
      {isMobile ? (
        <NavigationBarMobile setPage={setPage} allPages={allPages} />
      ) : (
        <NavigationBar setPage={setPage} allPages={allPages} />
      )}
      </div>
      <div className="NavBarDivHidden">
      {isMobile ? (
        <NavigationBarMobile setPage={setPage} allPages={allPages} />
      ) : (
        <NavigationBar setPage={setPage} allPages={allPages} />
      )}
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
