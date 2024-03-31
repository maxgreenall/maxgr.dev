import Nav from "./components/nav"
import Hero from "./components/hero"
import Links from "./components/links"
import Projects from "./components/projects"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Nav></Nav>

      <div className="container mx-auto max-w-[1024px]">
        <Hero></Hero>
        <Projects></Projects>
        <Links></Links>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
