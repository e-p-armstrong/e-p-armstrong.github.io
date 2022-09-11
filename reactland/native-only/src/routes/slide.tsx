import { useParams } from "react-router-dom"

export default function Slide () {
    const { slideId } = useParams();
    switch (slideId) {
        case "1":
            return (<></>)
            break;
        case "2":
            return (<></>)
            break;
        case "2":
            return (<></>)
            break;
            case "3":
            return (<></>)
            break;
            case "4":
            return (<></>)
            break;
            case "5":
            return (<></>)
            break;
            case "6":
            return (<></>)
            break;
            case "7":
            return (<></>)
            break;
            case "8":
            return (<></>)
            break;
            case "2":
            return (<></>)
            break;
            case "2":
            return (<></>)
            break;
            case "2":
            return (<></>)
            break;
            case "2":
            return (<></>)
            break;
            case "2":
            return (<></>)
            break;
            case "2":
            return (<></>)
            break;
        default:
            return <></>
            break;
    }
}