import React, {useState,useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { portfolioText } from '../data/portfolio'

const Port = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },300)
  },[]);

  const portPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id='portfolioPage' className={portPageClass}>
        <h2>🫣 나만의 포트폴리오 사이를 만들고 싶다면.</h2>
        <div className="video__inner">
          <VideoCard videos={portfolioText} />
        </div>
      </section>
    </Main>

  )
}

export default Port
