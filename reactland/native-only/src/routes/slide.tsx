import { useParams } from "react-router-dom"

export default function Slide () {
    const { slideId } = useParams();
    return <div>ID: {slideId}</div>
}