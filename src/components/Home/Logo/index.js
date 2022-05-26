import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import React, { useEffect, useRef } from "react";
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';


const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    


useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

    gsap.to(
      solidLogoRef.current,
      {
        x: 100,
        opacity: 1,
        delay: 3,
        duration: 3, 
      },
      {
        x: 100,
        opacity: 1,
        delay: 3,
        duration: 3,      }
    )
  }, [])


    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt="A" />
            
        </div>
    )
}


export default Logo