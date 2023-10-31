import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/Splash/Splash";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <About />
    </div>
  );
}

export default App;
