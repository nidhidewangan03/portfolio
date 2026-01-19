import React, { useEffect, useRef, useState } from 'react'
import './home.scss'
import { ReactTyped } from "react-typed"
import Video from '../../assests/background.mp4'

const Home = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  )

  const videoRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setTimeout(() => {
        video.currentTime = 0
        video.play()
      }, 1000)
    }

    video.addEventListener("ended", handleEnded)
    return () => video.removeEventListener("ended", handleEnded)
  }, [])

  return (
    <div className='home-page'>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className={isMobile ? "mobile-video" : "desktop-video"}
      >
        <source src={Video} type='video/mp4' />
      </video>

      <div className='text-zone'>
        <h3 className='typewriting'>
          <ReactTyped
            strings={["Namaste ", "Hello ", "Bonjour "]}
            typeSpeed={100}
            loop
            backSpeed={30}
            cursorChar="|"
            showCursor={true}
          />
        </h3>
        <h1>I'm <span>Nidhi Dewangan</span><br /></h1>
        <h2>Designer and Developer</h2>
        <h3>Frontend Developer | UI/UX Designer</h3>
      </div>
      
    </div>
  )
}

export default Home