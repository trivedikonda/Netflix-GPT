import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addTopRatedMovies } from "../../utils/moviesSlice"

import { API_OPTIONS } from "../../utils/constants"

const useTopRatedMovies= () => {
    //Fetch data from TMDB API and update the store
  const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
  const dispatch = useDispatch()

  const getTopRatedMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", 
        API_OPTIONS)

      const json = await data.json()

      console.log("TOP RATED MOVIES",json.results)
      dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
      !topRatedMovies&&getTopRatedMovies()
    },[])
}

export default useTopRatedMovies