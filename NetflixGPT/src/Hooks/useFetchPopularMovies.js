import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovie = () => {
    const popularMovies = useSelector(store => store.movie.popularMovies)
    const dispatch = useDispatch();

    const  fetchPopularMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
     const jsonData = await data.json();    
     dispatch(addPopularMovies(jsonData.results)) 
     
    };
    
    useEffect( () => {
       !popularMovies && fetchPopularMovies();
    },[]);
    

}

export default usePopularMovie;