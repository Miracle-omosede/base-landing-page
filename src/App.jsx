import './App.scss'
import Oldwoman from "./images/oldwoman2.jpg"
import Oldwoman2 from "./images/oldwoman1.jpg"
import Dude from "./images/dude.jpg"
import Arrowright from "./images/arrow-right.svg"

function App() {
  return (
    <div className='hero'>
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
          <div className='hero-images-inner'>
            <div className='hero-image girl2'>
              <img src={Oldwoman2} alt='old woman'/>
            </div>
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
