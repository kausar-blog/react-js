import "./App.css";
import HeroArea from "./Components/HP8_Img/heroArea";
import Footer, { Hero, Navbar } from "./Components/HP8_Img/Nabar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <HeroArea />
        <Footer />
      </div>
    </>
  );
}

export default App;
