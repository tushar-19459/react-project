import { useRef } from "react"
import UseFetch from "./UseFetch"

export default function UpDown({ url }) {

    const { data, error, loading } = UseFetch({ url })
    const bottomRef = useRef(null)
    if (loading) {
        return (<div>Loading... </div>)
    }
    if (error) {
        return (<div>error {error} </div>)
    }

    function goUp() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function goDown() {
        bottomRef.current.scrollIntoView({behavior:"smooth"})
    }

    return (
        <div>
            <button onClick={goDown}>go down</button>
            <ul>
                {data && data.products.map((item) =>
                    <li key={item.id}>{item.title}</li>
                )}
            </ul>
            <button onClick={goUp} ref={bottomRef}>go up</button>
        </div>
    )
}