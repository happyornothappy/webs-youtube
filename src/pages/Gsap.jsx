import React, {useState,useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { gsapText } from '../data/gsap'

const Gsap = () => {

  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },300)
  },[]);

  const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id='gsapPage' className={gsapPageClass}>
        <h2>😄 창의적 사이트를 만들고 싶다면!</h2>
        <div className="video__inner">
          <VideoCard videos={gsapText} />
        </div>
      </section>
    </Main >

  )
}

export default Gsap
