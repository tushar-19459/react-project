import { useState } from "react"
import QRCode from 'react-qr-code'
export default function code(){

    
    const [qrcode,setqrcode] = useState('')
    const [input,setinput] = useState('')

    function handleqrcode(params) {
        setqrcode(input)
        // document.getElementById('input-value').value=''
        setinput('')
    }

    return(
        <>
        <div className="input">
            <input type="text" name="qr-code" value={input} placeholder="enter value here"  onChange={(e)=>setinput(e.target.value)}/>
            <button onClick={handleqrcode} disabled={input && input.trim() !==''?false:true}>Generate</button>
        </div>
        <div className="QRCode">
            <QRCode value={qrcode} ></QRCode>
        </div>
        </>
    )
}