import React, { useEffect, useRef } from 'react'
import "../assets/scss/section/testHeader.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portText } from "../constants";

const AboutView = () => {

  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);
  
  // useEffect : 랜더링이 되고나서 dom조작할떄 사용함
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
      trigger: horizontal,
      start: "top 56px",
      end: () => "+=" + horizontal.offsetWidth,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      },
    });

    return () => {
        scrollTween.kill();
    };

  }, []);

  return (
    <>
    {/* header */}
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
    {/* //header */}

    <main>
      <section id="demo">
        <div className="demo__inner">
          <h2 className='demo__title'>제목입니다1.</h2>
          <div className='demo__content'></div>
        </div>
      </section>
      <section id="demo2">
        <div className="demo__inner">
          <h2 className='demo__title'>제목입니다2.</h2>
          <div className='demo__content'></div>
        </div>
      </section>
      <section id="demo3">
        <div className="demo__inner">
          <h2 className='demo__title'>Site</h2>
          <div className='demo_warp'>
            <article>1</article>
            <article>2</article>
            <article>3</article>
            <article>4</article>
          </div>
        </div>
      </section>
      <section id="demo4" ref={horizontalRef}>
        <div className="demo__inner">
          <h2 className='demo__title'>Portfolio</h2>
          <div className='demo_warp'>
            {portText.map((port, key) => (
              <div 
                className={`demo__port__item num${key+1}`}
                key={key}
                ref={(el) => (sectionsRef.current[key] = el)}
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    {/* footer */}
    <footer id="footer" role="contentinfo">
        <div className="footer__inner">
            <h2 className="footer__text">
                <div>jjgodcom</div>
                <div>@frontDev</div>
            </h2>
            <div className="footer__right">
                &copy; 2023 webstoryboy<br />
                이 사이트는 리액트를 이용하여 제작하였습니다.
            </div>
        </div>
    </footer>
    {/* //footer */}
    </>
  )
}

export default AboutView