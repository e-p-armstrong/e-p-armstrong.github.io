import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

import Slide1 from "./slides/slide1";

export default function Capstone () {
    const { slideId } = useParams();
    let slide = <></>
    switch (slideId) {
        case "1":
            slide = Slide1()
            break
        case "2":
            slide = <></>
            break
        case "3":
            slide = <></>
            break
        case "4":
            slide = <></>
            break
        case "5":
            slide = <></>
            break
        case "6":
            slide = <></>
            break
        case "7":
            slide = <></>
            break
        case "8":
            slide = <></>
            break
        case "9":
            slide = <></>
            break
        case "10":
            slide = <></>
            break
        case "11":
            slide = <></>
            break
        case "12":
            slide = <></>
            break
        case "13":
            slide = <></>
            break
        case "14":
            slide = <></>
            break
        case "15":
            slide = <></>
            break
        default:
            slide = <p className="text-white">Slide not found</p>
    }
    return (
    <div className="bg-zinc-900 h-full min-h-screen flex items-center">
        {slide}
    </div>)
}