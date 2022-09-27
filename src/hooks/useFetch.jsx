import { useEffect, useState } from "react";


function useFetch(url) {

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        const abourtCont = new AbortController();

        // Fetching data this is a get method and it returns a promise
        fetch(url, { signal:abourtCont.signal })
        .then(res => {
            if(!res.ok){
                throw Error("Could Not Fetch Data For That Resource")
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AboutError'){
                console.log('fetch abourted');
            }
            setError(err.message);
            setIsLoading(false);
        })

        return() => abourtCont.abort();

    },[url]);

    return {data, isLoading, Error}
}

export default useFetch;