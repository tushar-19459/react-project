import { useState } from "react"
import "./Tabes.css"
export default function Tabestest({ data }) {

    const [tab, settab] = useState(0)

    function handleclick(params) {
        settab(params)
        console.log(params)
    }

    return (
        <>
            <div className="main">
                <div className="all-tabes">
                    {data.map((item, i) =>
                        <span key={i} className="tab-names" onClick={() => handleclick(i)}>{item.lable}</span>
                    )}
                </div>
            </div>
            <div className="all-content">
                <p>{data[tab]?.content}</p>
            </div>
        </>
    )
}