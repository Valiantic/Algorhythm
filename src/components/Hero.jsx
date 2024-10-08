
import React from 'react'


const Hero = () => {
  return (
    <section id="home" className='w-full flex xl:flex-row flex-col justify-center 
    min-h-screen gap-10 max-container'>

    <div className='relative xl:w-2/5 flex flex-col justify-center items-start 
    w-full max-xl:padding-x pt-28'>

        <p>Welcome to the Rhythm of Innovation</p>
        <h1 style={{color:"cyan"}}>
            <span>Algorhythm</span>
            <br />
            <span>Music</span>
            Meets Innovation
        </h1>
        <p>Discover the future of sound with our genre-blurring beats and electrifying performances.</p>
        
    </div>

    </section>
  )
}

export default Hero


// border-2 border-red-500 p-2
// used this to render the display
