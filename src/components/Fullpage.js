import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

export const Fullpage = () => {

  const onLeave = (origin, destinatoin, direction) =>{
    console.log("Leaving section " + origin.index);
  }
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  
  }

  const fullpageOptions = {
    const: ['page1','page2','page3']
  }

  return (
    <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */
      scrollOverflow={true}
      sectionsColor={["orange", "purple", "green"]}
      onLeave={onLeave}
      afterLoad={afterLoad}


      render={({ state, fullpageApi }) => {

        return (
          // <ReactFullpage.Wrapper>

          <div id="fullpage-wrapper">
          <div className="section section1">
            <h3>Section 1</h3>
          </div>
          <div className="section">
            <div className="slide">
              <h3>Slide 2.1</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.2</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.3</h3>
            </div>
          </div>
          <div className="section">
            <h3>Section 3</h3>
            <button onClick={() => fullpageApi.moveTo(1, 0)}>
              Move top
            </button>
          </div>
        </div>
          // </ReactFullpage.Wrapper>
        )
        
      }}
    />
  )

}