import React,{useRef} from 'react'
import backImage from '../assets/back.png'
import searchImage from '../assets/search.png'

/**
 * Component providing a means to input text and search the movie list matching the entered text.
 * @param {*} onInputChange : prop to handle the text input change.
 * @returns 
 */

function SearchTab({onInputChange,title}) {

    const inputRef = useRef(null)
    const handleChange = (e)=>{
        console.log(e.target.value)
        onInputChange(e.target.value)
    }

    const handleReset = ()=>{
      inputRef.current.reset()
      onInputChange('')
      document.getElementById('search-input').classList.add('invisible')
      document.getElementById('title').classList.remove('hidden')
    }

    const handleOpenSearch = ()=>{
      document.getElementById('search-input').classList.remove('invisible')
      document.getElementById('title').classList.add('hidden')
      console.log('added opening of the search')
    }
  return (
    
        <form ref={inputRef} action="#" className='w-full flex flex-row gap-10 items-center'>
        <button type='button' onClick={handleReset}><img src={backImage} alt="#" className='active:bg-gray-600' /></button>
        <h1 id='title' className='w-full text-start text-2xl'>{title}</h1>
        <input id='search-input' type="text" onChange={handleChange} className=' bg-slate-800 w-full p-2 focus:caret-indigo-200 focus:outline-none invisible' autoFocus />
        <button type='button' onClick={handleOpenSearch}><img src={searchImage} alt="#" /></button>
        </form>
        
    
  )
}

export default SearchTab