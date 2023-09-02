import React from 'react'
import image from "../../Assets/sec1-image.png"
import "./Section.css"


const Section1 = () => {
  return (
    <div className="section1-container">
    <div className="section1-text">

<p>The Athenaeum</p>
<p className="p-tag">The Warm-up</p>
<p>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
<button class="read-more-button">Read More     
 
 
 <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    class="arrow-icon"
  >
    <path
      d="M7.64645 3.14645C7.45118 2.95118 7.13468 2.95118 6.93942 3.14645C6.74415 3.34171 6.74415 3.65821 6.93942 3.85347L9.79289 6.70694H1C0.723858 6.70694 0.5 6.9308 0.5 7.20694C0.5 7.48308 0.723858 7.70694 1 7.70694H9.79289L6.93942 10.5604C6.74415 10.7557 6.74415 11.0722 6.93942 11.2675C7.13468 11.4628 7.45118 11.4628 7.64645 11.2675L12.091 6.82297C12.2863 6.62771 12.2863 6.31121 12.091 6.11594L7.64645 1.67147C7.45118 1.47621 7.13468 1.47621 6.93942 1.67147C6.74415 1.86674 6.74415 2.18324 6.93942 2.3785L10.7929 6.23197H1C0.723858 6.23197 0.5 6.45583 0.5 6.73197C0.5 7.00811 0.723858 7.23197 1 7.23197H10.7929L6.93942 11.0854C6.74415 11.2807 6.74415 11.5972 6.93942 11.7924C7.13468 11.9877 7.45118 11.9877 7.64645 11.7924L12.091 7.34791C12.2863 7.15265 12.2863 6.83615 12.091 6.64088L7.64645 3.14645Z"
      fill="currentColor"
    />
  </svg>
</button>


    </div>
    <div className="section1-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    </div>
  )
}

export default Section1