import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="header">
      <div className="overlap-group-2">
        <div className="rectangle-1510" />
        <div className="main-menu">
          <img className="group" src="logo.png" alt="Group" />
          <div className="navbar">
            <div className="navbar-link-solutions navbar-link overpass-semi-bold-storm-gray-18px">
              <span className="overpass-semi-bold-storm-gray-18px">Solutions</span>
            </div>
            <div className="navbar-link-pricing navbar-link overpass-semi-bold-storm-gray-18px">
              <span className="overpass-semi-bold-storm-gray-18px">Pricing</span>{" "}
            </div>
            <div className="navbar-link-testimonials navbar-link overpass-semi-bold-storm-gray-18px">
              <span className="overpass-semi-bold-storm-gray-18px">Testimonials</span>
            </div>
            <div className="navbar-link overpass-semi-bold-storm-gray-18px">
              {" "}
              <span className="overpass-semi-bold-storm-gray-18px">Resources</span>
            </div>
          </div>
          <div className="frame-4812">
            <div className="log-in overpass-bold-blueberry-14px">
              <button className="overpass-bold-blueberry-14px">Log in</button>{" "}
            </div>
            <div className="frame-1668">
              <div className="sign-up-for-free overpass-bold-white-14px">
                <button className="overpass-bold-white-14px">Sign Up for Free</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  );
}

export default App;
