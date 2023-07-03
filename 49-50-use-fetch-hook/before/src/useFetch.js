import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState(true)

    useEffect(() => {
        fetch(url).
        then(res => res.json()).
        then(data => {
            setData(data)
            setIsLoading(false)
        }).
        catch((err) => {
            setError(true)
        })
    }, [url])

    return {
        isLoading, error, data 
    }
}

export default useFetch


// * `isLoading` - Will be true while the fetch request is loading
// * `isError` - Will be true if the fetch request failed
// * `data` - Will contain the data from the fetch request