import React,{useRef} from 'react'
import backImage from '../assets/back.png'
import searchImage from '../assets/search.png'

/**
 * Component providing a means to input text and search the movie list matching the entered text.
 * @param {*} onInputChange : prop to handle the text input change.
 * @returns 
 */

function SearchTab({onInputChange}) {

    const inputRef = useRef(null)
    const handleChange = (e)=>{
        console.log(e.target.value)
        onInputChange(e.target.value)
    }

    const handleReset = ()=>{
      inputRef.current.reset()
      onInputChange('')
    }
  return (
    
        <form ref={inputRef} action="#" className='w-full flex flex-row gap-10'>
        <button type='button' onClick={handleReset}><img src={backImage} alt="#" className='active:bg-gray-600' /></button>
        <input type="text" onChange={handleChange} className=' bg-slate-800 w-full p-2 focus:caret-indigo-200 focus:outline-none' autoFocus />
        <button type='button' onClick={()=>{}}><img src={searchImage} alt="#" /></button>
        </form>
        
    
  )
}

export default SearchTab