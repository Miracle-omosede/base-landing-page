import React, {useRef, useEffect} from 'react'
import './App.scss'
import { TweenMax, TimelineLite, Power3 } from 'gsap'
import Oldwoman from "./images/oldwoman2.jpg"
import Dude from "./images/dude.jpg"
import Arrowright from "./images/arrow-right.svg"

function App() {
  let app = useRef(null);
  let images = useRef(null);

  let tl = new TimelineLite()

  useEffect(() => {
    // image vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    TweenMax.to(app, 0, { css: {visibility: "visible"}})
    tl.from(girlImage, 1.2,{y: 1280, ease: Power3.easeOut})
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  })
  
  return (
    <div className='hero' ref={el => app = el}>
      <div className='container'>
        <div className='hero-inner'>
          <div className="hero-content">
          <div className='hero-content-inner'>
              <h1>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    Relieving the burden
                  </div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    of diseases caused by
                  </div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    shy behaviours.
                  </div>
                </div>
              </h1>
              <p>Better treats serious cardiometaabolic diseases to transform lives and reduce healthcare utilization through the use of digital therapuetics. </p>

              <div className='btn-row'>
                <button className='explore-button'>Explore</button>
                <div className='arrow-icon'>
                  <img className='svg-controller' src={Arrowright} alt="arrow"/>
                </div>
              </div>
          </div>
          </div>
          <div className='hero-images'>
          <div className='hero-images-inner' ref={el => images = el}>
            <div className='hero-image girl'>
              <img src={Oldwoman} alt='old woman'/>
            </div>
            <div className='hero-image boy'>
              <img src={Dude} alt='dude'/>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default App
