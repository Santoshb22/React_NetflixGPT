import React from 'react'
import useFetchMainVideo from '../Hooks/useBGVideoPlaying';
import { useSelector } from 'react-redux';

const MainVideoPlaying = ({movieId}) => {
const trailerVideo  = useSelector(store => store.movie.trailerVideos?.key  )

useFetchMainVideo(movieId);

  return (
    <div>
      <iframe className='aspect-video w-full  '
        src={"https://www.youtube.com/embed/" + trailerVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default MainVideoPlaying