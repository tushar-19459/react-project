import { useState } from 'react'
import { useData } from './DataAcco'
export default function Accordion() {

    const [value, setvalue] = useState()
    const [multi, setMulti] = useState([])
    const [state, setState] = useState(true)
    const { data } = useData()

    function handleclick(index) {
        if (state) {
            setvalue(value === index ? null : index)
        } else {
            if(multi.includes(index)){
                setMulti(prev=>prev.filter(i=>i!==index))
            }else{
                setMulti(prev=>[...prev,index])
            }
            console.log(multi)
        }
    }

    function handlestate() {
        setState(!state)
    }

    return (
        <>
            <button onClick={handlestate}>{state ? "single" : "multi"}</button>
            <ul>
                {data.map((item, index) =>
                    <li key={index}>
                        <div onClick={() => handleclick(index)}>{item.question}</div>
                        {value === index && state && <p >{item.ans}</p>}
                        {!state && multi.includes(index) && <p>{item.ans}</p>}
                    </li>
                )}
            </ul>
        </>
    )
}