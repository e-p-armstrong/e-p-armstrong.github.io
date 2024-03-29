import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom"
import NavbarLink from "./components/navbar_link";
import Article from "./components/article";
import Para from "./components/para";
import Anchor from "./components/anchor";



function App() {
  const { slideId } = useParams();
  return (
    <div className="dark:bg-zinc-900 bg-neutral-200 h-full">
      <div className="w-full dark:bg-neutral-100 bg-stone-900 py-2 sticky top-0 shadow-md z-50">
        <h1 className="text-xl dark:text-black/80 text-white w-max mx-auto mb-3">Welcome to Evan's Corner of the Internet!</h1>
        <hr className="w-1/6 mx-auto mb-3 dark:border-black/80 text-zinc-400"/>
        <nav className="w-max mx-auto">
          <NavbarLink to="/">Home Page</NavbarLink> <span className="dark:text-black/60 text-white">|</span> {"  "}
          <NavbarLink to="/codeprojects">Code Examples</NavbarLink>
        </nav>
      </div>
        <Outlet />

        {slideId ? null : <Article className="dark:bg-stone-900 bg-gray-300 shadow-lg">
            <Para className="font-semibold">Copyright Evan Armstrong 2022</Para>
            <Para className="dark:text-white/60 text-stone-800">Contact: evanpeterarmstrong@gmail.com</Para>
            <Para className="dark:text-white/60 text-stone-800">IG: @e_p_armstrong</Para>
            <Para>Image Credit (the depiction of the Galaxy): <Anchor href="https://www.eso.org/public/">ESO/NASA/JPL-Caltech/M. Kornmesser/R. Hurt</Anchor></Para>
        </Article>}
    </div>
  );
}

export default App;
