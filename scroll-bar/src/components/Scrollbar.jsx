// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

import { useState } from "react"
import { useEffect } from "react"

export default function Scrollbar() {

    const [products, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [scrollper, setscrollpre] = useState(0)



    const url = 'https://dummyjson.com/products?limit=1000'
    async function apicall() {
        try {
            setLoading(true)
            const responce = await fetch(url)
            const data = await responce.json()
            setData(data.products)
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    function handlescrool() {
        const howmuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setscrollpre((howmuchScrolled / height) * 100)
    }

    console.log(scrollper)

    useEffect(() => {
        apicall()
    }, [])

    useEffect(() => {
        const id = window.addEventListener('scroll', handlescrool)

        return () => {
            window.removeEventListener('scroll', handlescrool)
        }

    }, [])

    if (error) return <div>{error}</div>
    if (loading) return <div>Loading...</div>


    return (
        <div>
            <div className="scrooltracking ">
                <div className="current-progress" style={{width:`${scrollper}%`}}>

                </div>
            </div>
            <h1>products</h1>
            {products.map((data =>
                <div key={data.id}>{data.title}</div>
            ))}
        </div>
    )
}