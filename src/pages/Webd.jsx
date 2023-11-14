import React, {useState,useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { webdText } from '../data/webd'

const Webd = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },300)
  },[]);

  const webdPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>

      <section id='webdPage' className={webdPageClass}>
        <h2>😄 웹디자인기능사 한번에 따자!</h2>
        <div className="video__inner">
          <VideoCard videos={webdText}/>
        </div>
      </section>
    </Main >

  )
}

export default Webd
