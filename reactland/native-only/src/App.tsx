import { Link, Outlet } from "react-router-dom"


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Evan's Corner of the Internet!</h1>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/codeprojects">code projects</Link>
        <Link to="/capstone">capstone</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
