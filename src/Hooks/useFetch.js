import { useEffect, useState } from "react";


function useFetch(apiPath, query = '') {
 const url =     `https://api.themoviedb.org/3/${apiPath}?${ProcessingInstruction.env.API_KEY}&language=en-US&query=${query && `&query=${query}`}`
    const [data, setData] = useState([])
    
    useEffect(() => {
        async function fetchData() {
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchData()
      },[url])
    return {
      data
  }
}

export default useFetch
