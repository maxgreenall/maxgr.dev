import Nav from "./components/nav"
import Hero from "./components/hero"
import Links from "./components/links"
import Projects from "./components/projects"
import Footer from "./components/footer"
//import About from "./components/about"
import CallTA from "./components/callta"

import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import Contact from "./components/contact"

function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Nav onContactPress={onOpen}></Nav>

      <div className="container mx-auto max-w-[1024px]">
        <Hero onContactPress={onOpen}></Hero>
        
        {/* <About></About> */}
        <Projects></Projects>
        <Links></Links>
        <CallTA onContactPress={onOpen}></CallTA>

        <Footer></Footer>

        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            <ModalHeader>Contact</ModalHeader>
            <ModalBody>
              <Contact></Contact>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}

export default App
