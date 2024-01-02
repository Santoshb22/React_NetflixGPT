import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useFetchTopRaterMovies = () => {
    const topRatedMovies = useSelector(store => store.movie.topRatedMovies)
    const dispatch = useDispatch();

    const  fetchTopRatedMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
     const jsonData = await data.json();    
     dispatch(addTopRatedMovies(jsonData.results)) 
     
    };
    
    useEffect( () => {
      !topRatedMovies && fetchTopRatedMovies();
    },[]);
    

}

export default useFetchTopRaterMovies;