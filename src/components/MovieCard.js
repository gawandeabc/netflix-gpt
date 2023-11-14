import React from 'react'
import { DUMMY_IMG_CDN_URL, IMG_CDN_URL, LOGO } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  // if(!posterPath){
  //   return posterPath = DUMMY_IMG_CDN_URL;
  // } 
  return (
    <div className='w-48 pr-4'>
        <img alt="Movie Card"
        src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard