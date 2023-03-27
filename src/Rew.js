import {BrowserRouter, Routes, Route, useParams} from "react-router"
import {Link} from "react-router-dom";
function Rew() {
    const {qwe, wer} = useParams()
    return(<Link to={`/asd/${wer}/${qwe}`}>LINK B</Link>)
}
export default Rew