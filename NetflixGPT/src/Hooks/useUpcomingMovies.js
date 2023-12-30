import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const  fetchUpcomingMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
     const jsonData = await data.json();    
     dispatch(addUpcomingMovies(jsonData.results)) 
     
    };
    
    useEffect( () => {
        fetchUpcomingMovies();
    },[]);
    

}

export default useUpcomingMovies;