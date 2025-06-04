import { useEffect, useState } from "react";

export default function Search() {
    const [user, setUser] = useState([])
    const [filter, setfilter] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userName, setUserName] = useState("")

    async function apicall() {
        try {
            setLoading(true)
            const responce = await fetch('https://dummyjson.com/users?limit=208')
            const data = await responce.json()
            console.log(data.users)
            setUser(data.users)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        apicall()
    }, [])

    function handleSearch(userName) {
        const data = user.filter((user) =>
            user.firstName.toLowerCase().includes(userName.toLowerCase())
        )
        setfilter(data)
        console.log(data)
    }

    if (error) return (<div>{error}</div>)
    if (loading) return (<div> Loading... </div>)

    return (
        <div>
            <input type="text" placeholder="enter name" onChange={(e) => handleSearch(e.target.value)} />
            {filter ? filter.map((data) =>
                <div>{data.firstName}</div>
            ) :
                user.map((data) =>
                    <div>{data.firstName}</div>)
            }
        </div>
    )
}