import './styles/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { projects } from './data/projects'
import { hobbies } from './data/hobbies'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Hobbies from './components/Hobbies'


const App = () => {
  return (
    <div className="app-container">
      <Header name="Fabrizio Roman" tagline="Web Developer" isStudent={true} />
      <main>
        <AboutMe bio="I am a web developer with a passion for creating beautiful and functional websites." />
        <Projects projects={projects} />
        <Hobbies hobbies={hobbies} />
      </main>
      <Footer email="fabrizio@example.com" message="Thanks for visiting my portfolio!" />
    </div>
  )
}

export default App
