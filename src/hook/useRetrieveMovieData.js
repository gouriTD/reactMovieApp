import {useState,useEffect} from 'react'
const useRetrieveMovieData = (data)=>{
    const [movieItems,setMovieItems] = useState([])
    const [hasMoreMovie,setHasMoreMovie] = useState(true)
    useEffect(()=>{
      if(data){
        setMovieItems(prev=>([...prev, ...data['page']['content-items']['content']]))
      }
    },[data])

    useEffect(()=>{
      if(data){
        if(movieItems.length >= data['page']['total-content-items']) setHasMoreMovie(false)
      }
    },[movieItems])

   
    return {movieItems,hasMoreMovie}
  }

export default useRetrieveMovieData  