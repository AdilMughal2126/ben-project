import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import AppNavbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <HeroSection />
    </div>
  );
}

export default App;
