import { useEffect } from 'react'
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const SITE_URL = 'https://michaelkellar.netlify.app';

const allPages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
] as const;

const pageMetadata: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
  }
> = {
  '/': {
    title: 'Michael Kellar | Frontend Developer in San Francisco',
    description: 'Michael Kellar is a frontend developer in San Francisco with experience in React, TypeScript, and data visualization.',
    image: `${SITE_URL}/thinkingBW.png`,
    imageWidth: 690,
    imageHeight: 718,
    imageAlt: 'Portrait-style black and white profile image representing Michael Kellar',
  },
  '/about': {
    title: 'About | Michael Kellar',
    description: 'Learn more about Michael Kellar, a frontend developer in San Francisco with startup, tutoring, and engineering experience.',
    image: `${SITE_URL}/trialtrace-ss.png`,
    imageWidth: 1694,
    imageHeight: 924,
    imageAlt: 'TrialTrace application screenshot showing professional frontend dashboard work',
  },
  '/skills': {
    title: 'Skills | Michael Kellar',
    description: 'Explore Michael Kellar\'s frontend and full-stack skills including React, TypeScript, D3.js, and modern web tooling.',
    image: `${SITE_URL}/footballstats-ss.png`,
    imageWidth: 1920,
    imageHeight: 956,
    imageAlt: 'Interactive football data visualization dashboard built with React and D3',
  },
  '/projects': {
    title: 'Projects | Michael Kellar',
    description: 'View software projects by Michael Kellar, including frontend applications, data visualization work, and AI-assisted tools.',
    image: `${SITE_URL}/mcp-tutor-ss-low.jpg`,
    imageWidth: 1595,
    imageHeight: 891,
    imageAlt: 'MCP Code Tutor project interface for interactive coding guidance',
  },
  '/contact': {
    title: 'Contact | Michael Kellar',
    description: 'Contact Michael Kellar, frontend developer in San Francisco, for software engineering opportunities and collaboration.',
    image: `${SITE_URL}/studytrack-ss.png`,
    imageWidth: 1918,
    imageHeight: 956,
    imageAlt: 'StudyTrack web app screenshot with progress and study planning interface',
  },
};

const upsertMetaTag = (attribute: 'name' | 'property', key: string, value: string) => {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', value);
};

const upsertCanonicalLink = (href: string) => {
  let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
};

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const location = useLocation();

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] ?? pageMetadata['/'];
    const routePath = location.pathname === '/' ? '' : location.pathname;
    const routeUrl = `${SITE_URL}${routePath}`;

    document.title = metadata.title;

    upsertMetaTag('name', 'description', metadata.description);
    upsertMetaTag('property', 'og:title', metadata.title);
    upsertMetaTag('property', 'og:description', metadata.description);
    upsertMetaTag('property', 'og:url', routeUrl);
    upsertMetaTag('property', 'og:image', metadata.image);
    upsertMetaTag('property', 'og:image:width', String(metadata.imageWidth));
    upsertMetaTag('property', 'og:image:height', String(metadata.imageHeight));
    upsertMetaTag('property', 'og:image:alt', metadata.imageAlt);
    upsertMetaTag('name', 'twitter:title', metadata.title);
    upsertMetaTag('name', 'twitter:description', metadata.description);
    upsertMetaTag('name', 'twitter:url', routeUrl);
    upsertMetaTag('name', 'twitter:image', metadata.image);
    upsertMetaTag('name', 'twitter:image:alt', metadata.imageAlt);
    upsertCanonicalLink(routeUrl);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="NavBarDiv">
        {isMobile ? (
          <NavigationBarMobile allPages={allPages} />
        ) : (
          <NavigationBar allPages={allPages} />
        )}
        </div>
        <div className="NavBarDivHidden">
        {isMobile ? (
          <NavigationBarMobile allPages={allPages} />
        ) : (
          <NavigationBar allPages={allPages} />
        )}
        </div>
        <div className="MainSection">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <div className="Footer">
          <BottomBar />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
