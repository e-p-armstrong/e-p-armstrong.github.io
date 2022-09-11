import { Link, Outlet } from "react-router-dom"
import NavbarLink from "./components/navbar_link";



function App() {
  return (
    <div className="bg-zinc-900 h-full">
      <div className="w-full bg-zinc-900 py-2 sticky top-0 border-b-2 border-white/5 z-50">
        <h1 className="text-xl text-white w-max mx-auto mb-3">Welcome to Evan's Corner of the Internet!</h1>
        <hr className="w-1/6 mx-auto mb-3 text-zinc-400"/>
        <nav className="w-max mx-auto">
          <NavbarLink to="/">Home Page</NavbarLink> <span className="text-white">|</span> {"  "}
          <NavbarLink to="/codeprojects">code examples</NavbarLink> <span className="text-white">|</span> {"  "}
          <NavbarLink to="/capstone">capstone</NavbarLink>
        </nav>
      </div>
        <Outlet />
    </div>
  );
}

export default App;
