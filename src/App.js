import './App.css';
import MyNavbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Trending from './components/Trending.js';
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
      <div className="trending">
        <Trending/>
      </div>
    </div>
  );
}

export default App;