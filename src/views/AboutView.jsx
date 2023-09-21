import React from 'react'
import "../assets/scss/section/testHeader.scss"

const AboutView = () => {
  return (
    <header id="test">
      <div className="test__inner">
        <div className="test__logo">logo</div>
        <div className="test__nav">
          <ul>
            <li>INTRO</li>
            <li>SKILL</li>
            <li>SITE</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default AboutView