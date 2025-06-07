import { UsePopup } from "./PopupContext"
export default function PopUp() {

    const { pop, setpop } = UsePopup()

    if(!pop) return null

    return (
        <>
            <button onClick={()=>setpop(false)}>x</button>
            <h1>this is the popup</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, molestia</p>
        </>

    )
} 