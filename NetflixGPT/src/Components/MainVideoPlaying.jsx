import React from 'react'
import useFetchMainVideo from '../Hooks/useBGVideoPlaying';
import { useSelector } from 'react-redux';

const MainVideoPlaying = ({movieId}) => {
const trailerVideo  = useSelector(store => store.movie.trailerVideos?.key  )
console.log(trailerVideo)

useFetchMainVideo(movieId);

  return (
    <div>
      <iframe className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&controls=0&showinfo=0&autohide=1 `}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default MainVideoPlaying