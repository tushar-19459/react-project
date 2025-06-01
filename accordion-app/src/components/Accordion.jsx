import { useState } from "react";

function Accordion() {
    const [selected, setSelected] = useState(null)
    const [multiSelected, setMultiSelected] = useState([])
    const [isMulti, setIsMulti] = useState(false)

    const data = [
        {
            id: 1,
            question: "What is the capital of France?",
            ans: "Paris"
        },
        {
            id: 2,
            question: "Who wrote 'To Kill a Mockingbird'?",
            ans: "Harper Lee"
        },
        {
            id: 3,
            question: "What is the boiling point of water?",
            ans: "100°C (212°F)"
        },
        {
            id: 4,
            question: "Which planet is known as the Red Planet?",
            ans: "Mars"
        },
        {
            id: 5,
            question: "What is the largest ocean on Earth?",
            ans: "Pacific Ocean"
        }
    ];

    function handleClick(props) {
        // console.log(props)
        setMultiSelected([])
        setSelected(selected !== props ? props : null)
    }

    function handleMulti(props) {
        setSelected(null)
        const alldata = [...multiSelected]
        { alldata.indexOf(props) === -1 ? alldata.push(props) : alldata.splice(alldata.indexOf(props), 1) }
        console.log(alldata)
        setMultiSelected(alldata)
    }

    return (
        <div>

            <button className="toggl-button" onClick={() => setIsMulti(!isMulti)}>{isMulti ? "multi" : "single"}</button>
            <div className="main">
                {data.map(data =>
                    <div onClick={isMulti ? () => handleMulti(data.id) : () => handleClick(data.id)}

                        key={data.id}>{data.question}
                        {selected === data.id || isMulti && multiSelected.indexOf(data.id) !== -1 ? <p>{data.ans}</p> : null}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Accordion