import { useEffect, useState } from "react"

export default function LoadMore(params) {

    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(false)
    const url = `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`

    async function apicall(url) {
        try {
            setLoading(true)
            const responce = await fetch(url)
            const data = await responce.json()
            { data.total === products.length ? setDisable(true) : setDisable(false) }
            { count === 0 ? setProducts(data.products) : setProducts((prevdata) => [...prevdata, ...data.products]) }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        apicall(url)
    }, [count])

    function handleLoadMore(params) {

    }

    if (error) {
        return (
            <div>Error:{error}</div>
        )
    }
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <h1 className="shoping">Shoping</h1>
            <div className="main">

                {products.map((data) =>
                    <div className="card" key={data.id} >
                        <h2 className="title" >{data.title}</h2>
                        <h3 className="price" >{data.price} $</h3>
                        <img className="produc-img" src={data.images[0]} alt="" />
                    </div>
                )}


            </div>
            <div className="loadmore">
                <button onClick={() => setCount(count + 1)} className={disable ? 'remove' : 'loadmore-button'}>Load More</button>
            </div>
        </>
    )
}