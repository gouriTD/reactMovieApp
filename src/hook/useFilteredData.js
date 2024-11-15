import {useLayoutEffect,useState} from 'react'

/**
 * Filters out the content which matches the 'searchterm'
 * @param {*} searchTerm : search term
 * @param {*} dataList : data list on which filter is applicable.
 * @returns filteredData
 */
const useFilteredData = (searchTerm,dataList)=>{
    const [filteredData,setFilteredData] = useState(dataList)
  
    // console.log(dataList)
  
    useLayoutEffect(()=>{
      const timer  = setTimeout(()=>{
        const newFilteredData = dataList.filter(item=>item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0)
        // console.log(newFilteredData)
        setFilteredData(newFilteredData)
      },300)
      return ()=>clearTimeout(timer)
    },[searchTerm,dataList])
  
    return {filteredData}
  }

  export default useFilteredData