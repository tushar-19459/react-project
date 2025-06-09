import { useEffect, useRef, useState } from "react"
import UseFetch from "./UseFetch"
import Clickout from "./Clickout"

export default function testUseFetch() {

    const [click, setClick] = useState(false)
    const ref = useRef()
    const [show, setShow] = useState(false)
    const { item, loading, error, height, width } = UseFetch('https://dummyjson.com/products?limit=10')
    Clickout(ref, () => setClick(false))

    return (
        <>
            <h1>data</h1>
            {loading ? <h1>loading ...</h1> : null}
            {error ? <h1>Error : {error}</h1> : null}
            {item && item.products.length && item.products &&
                item.products.map((ele) =>
                    <div key={ele.id}>{ele.title}</div>
                )
            }
            <h1>Height : {height}</h1>
            <h1>Width : {width}</h1>

            <button onClick={() => setClick(true)}>show box</button>

            {click && <div ref={ref} >
                <h1>this is the box</h1>
                <p>
                    click outside the box to close
                </p>
            </div>}



        </>
    )
}