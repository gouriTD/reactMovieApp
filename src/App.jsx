import React, { useState, useEffect } from "react";
import { Info, Error, MovieContent } from "./components";
import { CONSTANTS } from "./utility/constants";
import useFetchData from "./hook/useFetchData";
import useRetrieveMovieData from './hook/useRetrieveMovieData'
import "./App.css";

/**
 * Main App Container: Containing the following components:
 * 1) Loading Info Component.
 * 2) Error Info component.
 * 3) MovieContent component.
 * 4) Pagination Component.
 */

const container_style =
  "w-full flex flex-col items-center titillium-web-extralight gap-2";
const isLoading_style = "text-2xl font-semibold text-green-50";
const content_container_style =
  "w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6";

function App() {
  const [currentSelectedPage, setCurrentSelectedPage] = useState(1);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const pageUrl = `${CONSTANTS.BASE_URL}${CONSTANTS.DATA}page${currentSelectedPage}.json`;
  // let content = { contentPerPage: 0, totalItems: 0, movieItems: [] };

  const { data, isLoading, error } = useFetchData(pageUrl);
  const {movieItems,hasMoreMovie} = useRetrieveMovieData(data)

    // Checking if via scrolling we have reached the end of the screen.
    function checkIfAtBottom(){
      console.log('If at bottom')
      const scrollPosition = document.documentElement.scrollTop + window.innerHeight; // Current scroll position + viewport height
      const documentHeight = document.documentElement.scrollHeight; // Total document height
  
      console.log(scrollPosition, documentHeight)
      
      // If we're near the bottom (allowing a small buffer of 50px)
      if (scrollPosition >= documentHeight - 400 - 50) {
        console.log('reached bottom of page')
        setIsAtBottom(true);
        console.log(hasMoreMovie)
        if(hasMoreMovie){
          setCurrentSelectedPage(prev=>prev+1)
        }
      } else {
        setIsAtBottom(false);
      }
    };
  

  useEffect(() => {
    // Set up the scroll event listener
    window.addEventListener('scroll', checkIfAtBottom);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', checkIfAtBottom);
    };
  }, [hasMoreMovie]); // Update the scroll listener if more contents are there to be downloaded.

  console.log(hasMoreMovie,isAtBottom)

  console.log(movieItems.length)

  return (
    <div id="content" className={container_style}>
      {isLoading && <Info className={isLoading_style}>Loading Data ...</Info>}
      {error && <Error>{error}</Error>}

      {movieItems && movieItems.length > 0 && (
        <div className={content_container_style}>
          <MovieContent data={movieItems} title={data['page']['title']}/>
        </div>
      )}
    </div>
  );
}

export default App;
