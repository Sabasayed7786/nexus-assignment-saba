import React from "react";
import backgroundImage from "../../Assets/Hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>Aesop Bar Soaps</h1>
        <p>A body care classic, reimagined</p>
        <p className="p-tag">
          Breathing new life into the humble bar soap are Nurture, Polish, and
          Refresh—three additions to the range, each imparting a unique
          constellation of benefits.
        </p>
        <a href="/your-bar-soap-page-url" className="cta-button">
          Discover Bar Soaps
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
        </a>
      </div>
    </div>
  );
};

export default Hero;
