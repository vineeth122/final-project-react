import {BrowserRouter, Link, Routes, Route, useParams} from "react-router"
// function Asd() {
//     const {zxc, xcv} = useParams()
//     const qwe = parseInt(zxc)
//     const wer = parseInt(xcv)
//     return(<h1>{wer - qwe}</h1>)
// }
// export default Asd;

import {useState} from 'react';
//

function Asd() {
    const [qwe, wer] = useState([123, 234, 345, 456, 567])
    const ert = (rty) => {
        const tyu = rty.filter(yui => yui != 345)
        wer(tyu)
    }
    return(
        <div>
            <ul>
                {qwe.map(uio => <li>{uio}</li>)}
            </ul>
            <button onClick={() => ert(qwe)}>BUTTON</button>
        </div>
    )
}


export default Asd;