import Nav from "./components/nav"
import Hero from "./components/hero"
import Links from "./components/links"
import Projects from "./components/projects"
import Footer from "./components/footer"
import About from "./components/about"
import CTA from "./components/cta"

function App() {
  return (
    <>
      <Nav></Nav>

      <div className="container mx-auto max-w-[1024px]">
        <Hero></Hero>
        
        <About></About>
        <Projects></Projects>
        <Links></Links>
        <CTA></CTA>

        <Footer></Footer>
      </div>
    </>
  )
}

export default App
