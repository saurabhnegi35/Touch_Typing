import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainSection />
        <Footer />
      </header>
    </div>
  );
}

export default App;
