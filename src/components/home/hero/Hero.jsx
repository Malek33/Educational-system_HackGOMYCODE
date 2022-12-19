import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO "MAKERS"' title='Best Online Education Expertise' />
            <p>Hi ! This is the Makers, a brand new learning platform.<br/>

              Our destination is to make studying&learning a more exciting experience for young teenagers!
              we assist our audience to discover a more efficient methods of studying&info-gathering  for the best academic performance.
              We also provide our platform with best resources to enhance quality.
              join us to shine together and stay in control.</p>
            <div className='button'>
              <a href="http://localhost/my/"><button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button></a>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
