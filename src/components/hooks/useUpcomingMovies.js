import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../../utils/moviesSlice"
import { API_OPTIONS } from "../../utils/constants"


const useUpcomingMovies= () => {
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)
    //Fetch data from TMDB API and update the store
  const dispatch = useDispatch()

  const getUpcomingMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", 
        API_OPTIONS)

      const json = await data.json()

      console.log("UPCOMING",json.results)
      dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
      !upcomingMovies&&getUpcomingMovies()
    },[])
}

export default useUpcomingMovies