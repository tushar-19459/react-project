import { useState } from "react"

function Color(params) {

    const [Color, setColor] = useState("#000000")
    const [colorType, setColorType] = useState("generate Randome color")
    const style = {
        color: "white",
        backgroundColor: Color
    }
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


    function getvalue(length) {
        let num = Math.floor(Math.random() * length)
        return num
    }

    function getRandomColor(props) {
        setColor("#")
        let temp = "#"

        for (let i = 0; i < 6; i++) {
            temp += data[getvalue(data.length)]
        }
        setColor(temp)
        setColorType(props)
    }

    function getRGB(props) {
        setColor("#")
        let temp = "#"
        let r = getvalue(256)
        let g = getvalue(256)
        let b = getvalue(256)
        setColor(`rgb(${r},${g},${b})`)
        setColorType(props)
    }
    return (
        <div className="main" style={style}>
            <div>
                <button onClick={() => getRandomColor("Genrate Hex color")}>Genrate Hex color</button>
                <button onClick={() => getRGB("generate RGB")}>generate RGB</button>
                <button onClick={() => getRandomColor("generate Randome color")} >generate Randome color</button>
            </div>
            <div>
                <h1 >{colorType}</h1>
                <h1 >{style.backgroundColor}</h1>
            </div>
        </div>
    )
}
export default Color