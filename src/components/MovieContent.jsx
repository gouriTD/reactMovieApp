import React, { useState, useCallback } from "react";
import { MovieCard, Header, SearchTab, Info } from "./index";
import useFilteredData from '../hook/useFilteredData'

/**
 * Component used for displaying the list of Movie cards and a search tab for searching from a list of movie items.
 */

const MovieContent = React.memo(function MovieContent({ data,title }) {
  const [searchTerm, setSearchTerm] = useState("");
  const {filteredData} = useFilteredData(searchTerm,data);

  const handleInputChange = useCallback((term) => {
    console.log(term);
    setSearchTerm(term);
  }, []);
  return (
    <>
      <Header>
        <SearchTab onInputChange={handleInputChange} title={title}/>
      </Header>
        {filteredData.length === 0 && <Info className="text-white mt-20 w-full h-full flex justify-center titillium-web-bold"><p>OOPS !!! no result ....</p></Info>}
        {filteredData &&
          filteredData.map((item, index) => (
            <MovieCard
              key={`${index}${item.name}`}
              title={item.name}
              poster={item["poster-image"]}
            />
          ))}
    </>
  );
})

export default MovieContent;
