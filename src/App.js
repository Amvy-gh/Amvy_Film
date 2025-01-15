import './App.css';
import MyNavbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Trending from './components/Trending.js';
import Superhero from './components/Superhero.js';
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* {Intro Section} */}
        <div className="myBG">
          <MyNavbar />
          <Intro />
        </div>  
      {/* {End of Intro} */}

      {/* {Trending Section} */}
      <div className="trending">
        <Trending/>
      </div>
      {/* {End of Trending} */}

      {/* {Superhero Section} */}
      <div className="Superhero">
        <Superhero />
      </div>
     {/* {Superhero Section} */}
    </div>
  );
}

export default App;