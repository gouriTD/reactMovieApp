# reactMovieApp 
## This app displays different movie posters with their title. 

### Key Features covered:
1) App implements the mobile portrait view with a grid of 3 columns.
2) For tablet mode , grid with 4 columns is supported and for views with further wider screen size, 6 column grid is supprted.
3) The main app layout has 3 main components:

    a)  A static header with search bar, 

        1) search bar takes user key strokes initiates a search when differnce of 2 key input event is greater than a pre-defined time.

        2) The back button on search bar , resets the search.

    b) The Movie container which shows all available movie items.

    c) Pagination component. 

        1) It is a list of button items showing the present selected page and it's content.

        2) A max of 20 movie items per page is displayed.

4) The listing grid has vertical scrolling enabled and horizontal scrolling disabled.

5) Global Font : Titillium Web, Background Color : #171717, Text Color : #FFFFFF, Thumbnail Aspect Ratio : 2:3 is supported.

6) Use of different code optimising techniques like , useCallback, React.memo, lazy loading in use.

7) Use of custom hook design pattern for code re-usability.

[Demo](https://gouritd.github.io/reactMovieApp/)




