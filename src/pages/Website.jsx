import React, {useState,useEffect } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { websiteText } from '../data/website'

const Website = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },300)
  },[]);

  const websitePageClass = loading ? 'isLoading' : 'isLoaded';


  return (
    <Main>
      <section id='websitePage' className={websitePageClass}>
        <h2>😄 웹사이트의 기초는 이 강의로~</h2>
        <div className="video__inner">
          <VideoCard videos={websiteText}/>
        </div>
      </section>
    </Main>
  )
}

export default Website
