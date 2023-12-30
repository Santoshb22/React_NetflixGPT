import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addplayingMovies } from "../utils/movieSlice";

const usePlayingMovie = () => {

    const dispatch = useDispatch();

    const  fetchPlayingMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
     const jsonData = await data.json();    
     dispatch(addplayingMovies(jsonData.results)) 
     
    };
    
    useEffect( () => {
        fetchPlayingMovies();
    },[]);
    

}

export default usePlayingMovie;