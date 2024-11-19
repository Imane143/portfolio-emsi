import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';

// Layout Components
import Header from './components/layout/header';
import Footer from './components/layout/footer';

// Section Components
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Skills from './components/sections/skills';
import Contact from './components/sections/contact';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles theme={theme} />
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  </ThemeProvider>
);

export default App;