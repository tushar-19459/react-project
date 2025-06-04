import { useState } from "react"

export default function name() {

    const [player, setPlayer] = useState('X')
    const [winner, setWinner] = useState('')
    const [squire, setSquire] = useState(Array(9).fill(''))

    function handlereset() {
        setSquire(Array(9).fill(''))
        setPlayer('X')
        setWinner('')
    }

    function getWinner(temp) {
        const winerpattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]
        for (let index = 0; index < winerpattern.length; index++) {
            const [x, y, z] = winerpattern[index]
            if (temp[x] === temp[y] && temp[y] === temp[z] && temp[z] === temp[x]) {
                return temp[x]
            }
        }
        return null
    }

    function handleclick(value) {
        if (squire[value] === '') {
            const temp = [...squire]
            temp[value] = player
            setSquire(temp)
            setWinner(getWinner(temp))
            setPlayer(player === 'X' ? 'O' : 'X')
        }
    }

    function Squire({ value }) {
        return <div className="Columen" onClick={() => handleclick(value)}>{squire[value]}</div>
    }
    return (
        <div className="main">
            <h1>player :{player}</h1>
            <div className="row">
                <Squire value={0}></Squire>
                <Squire value={1}></Squire>
                <Squire value={2}></Squire>
            </div>
            <div className="row">
                <Squire value={3}></Squire>
                <Squire value={4}></Squire>
                <Squire value={5}></Squire>
            </div>
            <div className="row">
                <Squire value={6}></Squire>
                <Squire value={7}></Squire>
                <Squire value={8}></Squire>
            </div>{winner && <h1>winner : {winner}</h1>}
            <button onClick={handlereset}>Reset</button>
        </div>
    )
}