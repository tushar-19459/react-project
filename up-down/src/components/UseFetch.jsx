import { useState } from "react";
import { useEffect } from "react";

export default function UseFetch( {url} ) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    async function apiCall() {
        try {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        apiCall()
    }, [url])

    return ({ data, error, loading })
}