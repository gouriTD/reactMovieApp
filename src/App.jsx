import React, { lazy, useCallback, useState } from "react";
import { Info, Error, MovieContent } from "./components";
import { CONSTANTS } from "./utility/constants";
import useFetchData from "./hook/useFetchData";
import "./App.css";
import { Suspense } from "react";

// Here we are lazy loading the pagination items, as it needs to be loaded when we scroll to bottom of our page.
const Pagination = lazy(()=>import('./components/Pagination'))

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
  const pageUrl = `${CONSTANTS.BASE_URL}${CONSTANTS.DATA}page${currentSelectedPage}.json`;
  let content = { contentPerPage: 0, totalItems: 0, movieItems: [] };

  const { data, isLoading, error } = useFetchData(pageUrl);

  if (data) {
    content.movieItems = data["page"]["content-items"]["content"];
    content.contentPerPage = data["page"]["page-size-requested"];
    content.totalItems = data["page"]["total-content-items"];
  }

  const handlePageSelection = useCallback((pageNumber) => {
    setCurrentSelectedPage(pageNumber);
  }, []);

  return (
    <div className={container_style}>
      {isLoading && <Info className={isLoading_style}>Loading Data ...</Info>}
      {error && <Error>{error}</Error>}

      {content.movieItems && content.movieItems.length > 0 && (
        <div className={content_container_style}>
          <MovieContent data={content.movieItems} />
        </div>
      )}
      {content.totalItems > 0 && (
        <Suspense fallback={<p>Loading...</p>}>
           <Pagination
          postsPerPage={content.contentPerPage}
          length={content.totalItems}
          selectedPage={currentSelectedPage}
          setPageSelection={handlePageSelection}
        />
        </Suspense>
       
      )}
    </div>
  );
}

export default App;
