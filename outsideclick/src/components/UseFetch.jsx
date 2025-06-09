import { useEffect, useState } from "react"

export default function UseFetch(url) {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [height, setHight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)


    async function apicall(url) {
        try {
            setLoading(true)
            const responce = await fetch(url)
            if (!responce.ok) throw new Error(responce.statusText)
            const data = await responce.json()
            setItem(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        addEventListener("resize", handleresize)
        apicall(url)
    }, [url])

    function handleresize() {
        setHight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    function handleClick() {
        setShow(true)
    }

    return { item, loading, error, height, width }


}