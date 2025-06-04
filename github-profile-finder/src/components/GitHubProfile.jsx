import { useEffect, useState } from "react"

// `https://api.github.com/users/${name}`

export default function GitHubProfile() {

    const [name, setname] = useState("")
    const [loading, setLoading] = useState(false)
    const [responce, setresponce] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")
    const [data, setdata] = useState([])

    async function apicall(params) {
        try {
            setLoading(true)
            const responce = await fetch(`https://api.github.com/users/${name}`)
            const data = await responce.json()
            console.log(responce.ok)
            console.log(data)
            setdata(data)
            setname('')
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (search) {
            apicall()
        }
    }, [search])

    function handleSearch(e) {
        e.preventDefault()
        setSearch(name)
        console.log(name)
    }


    if (loading) return (<h1>Loading...</h1>)
    if (error) return (<h1>{error}</h1>)


    return (
        <div className="main">
            <input type="text" placeholder="Enter Github name" id='name-input' value={name} onChange={(e) => setname(e.target.value)} />
            <button onClick={(e) => handleSearch(e)}>Search</button>
            {data.status === '404' ? <h1>{data.message}</h1> : data.id && (
                <div className="card active">
                    <p><a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.name}</a></p>
                    <img src={data.avatar_url} className="profile-img" alt="avatar" />
                    <div className="info">
                    <p>Public Repos: {data.public_repos}</p>
                    <p>Public Gists: {data.public_gists}</p>
                    <p>Followers: {data.followers}</p>
                    <p>Following: {data.following}</p>
                    </div>
                </div>)}
        </div>
    )
}