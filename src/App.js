import { useEffect } from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import "./style/landingpage.css";

function App() {
  useEffect(() => {
    document.title = "Amvy Films - Watch Free Movies";
  }, []);

  return (
    <div className="app-container">
      <section className="hero-section">
        <MyNavbar />
        <Intro />
      </section>

      <section id="trending" className="trending-section">
        <Trending />
      </section>

      <section id="superhero" className="superhero-section">
        <Superhero />
      </section>
    </div>
  );
}

export default App;