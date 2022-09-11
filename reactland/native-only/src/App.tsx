import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom"
import NavbarLink from "./components/navbar_link";
import Article from "./components/article";
import Para from "./components/para";



function App() {
  const { slideId } = useParams();
  return (
    <div className="bg-zinc-900 h-full">
      <div className="w-full bg-stone-900 py-2 sticky top-0 shadow-md z-50">
        <h1 className="text-xl text-white w-max mx-auto mb-3">Welcome to Evan's Corner of the Internet!</h1>
        <hr className="w-1/6 mx-auto mb-3 text-zinc-400"/>
        <nav className="w-max mx-auto">
          <NavbarLink to="/">Home Page</NavbarLink> <span className="text-white">|</span> {"  "}
          <NavbarLink to="/codeprojects">Code Examples</NavbarLink> <span className="text-white">|</span> {"  "}
          <a href="https://old-pages-archive-evan.surge.sh/slideshow/slide1.html" className= "font-normal text-zinc-400 italic">Capstone</a>
        </nav>
      </div>
        <Outlet />

        {slideId ? null : <Article className="bg-black/50 shadow-lg">
            <Para className="font-semibold">Copyright Evan Armstrong 2022</Para>
            <Para className="dark:text-white/60 text-black/60">Contact: evanpeterarmstrong@gmail.com</Para>
            <Para className="dark:text-white/60 text-black/60">IG: @e_p_armstrong</Para>
            <Para>Image Credit (the depiction of the Galaxy): <a className="text-sky-200 italic underline" href="https://www.eso.org/public/">ESO/NASA/JPL-Caltech/M. Kornmesser/R. Hurt</a></Para>
        </Article>}
    </div>
  );
}

export default App;
