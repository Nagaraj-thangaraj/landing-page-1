import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home id="home" />
      <About id="about" />
      <Work />
      <Testimonials id="testimonials" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
