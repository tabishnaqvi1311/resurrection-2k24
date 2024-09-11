import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Theme from "./components/Theme";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Theme />
      <Events/>
      <Footer/>
    </main>
  )
}