import React from 'react'
import { CONSTANTS } from '../utility/constants'

const movie_card_style = 'flex flex-col border-0 border-slate-300'
const image_style = 'aspect-2/3 mb-1'
const text_style = ' m-0 mb-3 titillium-web-extralight text-xl'

/**
 * Movie Card which is used for displaying the content of the movie item.
 * @param {*} title poster : movieItem's title and poster image 
 * @returns 
 */

function MovieCard({title , poster}) {
  const handleImageOnError = (ev)=>{
    // Setting a default image if there is no network fetched image.
    ev.currentTarget.src = `${CONSTANTS.BASE_URL}/images/placeholder_for_missing_posters.png`
  }
  return (
    <div className={movie_card_style}>
        <div className={image_style}>
         <img src={`https://test.create.diagnal.com/images/${poster}`} alt="movie-image" className='w-full' onError={handleImageOnError}/>
        </div>
        <h3 className={text_style}>{title}</h3>
    </div>
  )
}

export default MovieCard