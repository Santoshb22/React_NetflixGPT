import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addTrailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchMainVideo = (movieId) =>{
    const dispatch = useDispatch();
    
const mainVideoPlaying = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
    );
    const json = await data.json();
    const trailerFilter = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailerFilter.filter.length ? trailerFilter[0] :json.results[0]
  
    dispatch(addTrailerVideos(trailer));
    };

    useEffect(() => {
    mainVideoPlaying();
    }, []);

}

export default useFetchMainVideo;


// {
//     "id": 695721,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Clip - ‘The Hanging Tree’",
//         "key": "1t4BE7FA-rM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-12-21T17:00:30.000Z",
//         "id": "658aa170b7b69d09066e1c33"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "'The Hunger Games: The Ballad of Songbirds & Snakes' with filmmakers | Academy Conversations",
//         "key": "qAqNtJgsh_E",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-12-20T18:00:11.000Z",
//         "id": "6585b7405cea18015162bea4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Clip - ‘Lucy Gray Baird’",
//         "key": "KkIoAkCoz70",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-12-19T23:00:13.000Z",
//         "id": "6583ac0588055141c727907a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Hunger Games' Tom Blyth and Josh Andrés Rivera are Team Peeta | BAFTA",
//         "key": "y2nBqLXcg1s",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-11-17T16:30:22.000Z",
//         "id": "655cbf14f6787a00aece2359"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Hunger Games: The Ballad of Songbirds & Snakes | Official IMAX® Interview",
//         "key": "2nmAEBG9WaQ",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-11-14T20:00:00.000Z",
//         "id": "655a9997d4fe04011b938608"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Olivia Rodrigo – 'Can’t Catch Me Now'",
//         "key": "Jorxf7TuqAc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-11-01T23:30:40.000Z",
//         "id": "6547f0c341a5613368844c3a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Clip - ‘Run’",
//         "key": "kqS5HLMZRvo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-11-01T18:00:02.000Z",
//         "id": "6547eecbd8cc4a00ad23b323"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Special Feature - ‘Music’",
//         "key": "0U0d6YhJ7tc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-10-26T15:00:11.000Z",
//         "id": "6547f0f141a56133693af6fd"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Clip - ‘A Brand New Role’",
//         "key": "yvNpKZdS12A",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-10-26T01:00:20.000Z",
//         "id": "6547f1021ac2927b2c80cada"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Special Feature - ‘Welcome Back to Panem’",
//         "key": "usnqA24Vtjs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-10-19T16:00:11.000Z",
//         "id": "653234e7481382011c20f567"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Hunger Games: The Ballad of Songbirds & Snakes (2023) Flickerman News – The Plinth Prize",
//         "key": "nbbxJ-FLzdc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-10-13T19:00:02.000Z",
//         "id": "65353e2ec14fee011de80ee1"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Flickerman News – The Rabies Hoax",
//         "key": "L56P-zfBs3I",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-10-05T21:07:30.000Z",
//         "id": "65353e3d2b2108011ddfbe9e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Remembering the War",
//         "key": "q-4degfNXVY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-09-29T02:06:38.000Z",
//         "id": "65353e4aabdafc00acf807fe"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Academy Orientation",
//         "key": "FtY-y7zCYiY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-09-29T02:06:30.000Z",
//         "id": "65353dbaabdafc010c2986ce"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer 2",
//         "key": "NxW_X4kzeus",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-09-20T12:45:13.000Z",
//         "id": "650b51af6c19ea00adecbdca"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Page to Screen Trailer",
//         "key": "HNTDUGnG2lg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": false,
//         "published_at": "2023-09-07T13:00:15.000Z",
//         "id": "65353ddfabdafc012da96a04"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "RDE6Uz73A7g",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-04-27T22:00:03.000Z",
//         "id": "644af1de596a910579576c57"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Reveal",
//         "key": "GfGcH2T53XY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2022-06-05T23:26:08.000Z",
//         "id": "629d3c9265e0a2550a278203"
//       }
//     ]
//   }