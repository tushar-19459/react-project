import { useEffect } from "react"
import { useState } from "react"

export default function Them() {

    
    const [theam, setTheam] = useState(localStorage.getItem("theam"))
    
    useEffect(()=>{
        localStorage.setItem("theam",theam)
        document.body.className = theam
    },[theam])

    function handlecolorchange() {
        setTheam(
            theam === "white" ? "black" : "white"
        )
    }
    return (
        <div >
            <h1>them is {theam}</h1>
            {/* <h1>color is {style.color}</h1> */}
            <button onClick={handlecolorchange}>Change Theme</button>
        </div>
    )
}