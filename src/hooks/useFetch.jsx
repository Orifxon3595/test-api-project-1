import {useState, useEffect} from 'react'
export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setIsPending(true)
       const getData = async () => {
        try {
            const req = await fetch(url);
            if(!req.ok){
                throw new Error(req.statusText);
            }
            const data = await req.json();
            setData(data);
            setIsPending(false)
            setError(null)
        } catch(error) {
            setError(error.message)
            setIsPending(false)
        }
       }

       getData();
    }, [url])
    return {data, isPending, error}
}