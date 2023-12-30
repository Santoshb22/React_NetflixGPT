import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useFetchTopRaterMovies = () => {

    const dispatch = useDispatch();

    const  fetchTopRatedMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
     const jsonData = await data.json();    
     dispatch(addTopRatedMovies(jsonData.results)) 
     
    };
    
    useEffect( () => {
        fetchTopRatedMovies();
    },[]);
    

}

export default useFetchTopRaterMovies;