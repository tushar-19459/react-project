import { UsePopup } from "./PopupContext"
export default function GetPopUp() {

    const { pop, setpop } = UsePopup()
    if (pop) return null
    return (
        <>
            <button onClick={() => setpop(true)}>get POPUP</button>
        </>
    )
}