import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Domains from "./components/Domains.jsx";
import Stack from "./components/Stack.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Domains />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
