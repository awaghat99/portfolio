import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/Splash/Splash";
import About from "./components/About/About";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <About />
      <Tech />
    </div>
  );
}

export default App;
