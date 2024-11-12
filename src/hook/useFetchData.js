import {useEffect,useState} from 'react'

/**
 * Custom hook to retrieve data from the network.
 * @param {*} url : url to be fetched
 * @returns data, loading state and error value
 */
const useFetchData = (url)=>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState(null)
  
    useEffect(()=>{
      async function fetchNetworkData(url){
        try {
          setIsLoading(true)
          setError('')
          const res = await fetch(url)
          if(!res.ok){
            throw Error(`${res.status} : Error in data fetching`)
          }else{
            const response = await res.json()
            console.log(response)
            setData(response)
          }
        } catch (error) {
          setError(error.message)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchNetworkData(url)
    },[url])
  
    return {
      data,
      isLoading,
      error
    }
    
  }

  export default useFetchData
  