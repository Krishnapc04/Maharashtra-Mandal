import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './Home.css'
import logo from '../assests/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  const [logoWidth, setLogoWidth] = useState(30);
  const [opacity,setOpacity]=useState(0) 


  useEffect(() => {
    const handleScroll = () => {
      const newWidth = Math.max(0, 30 - window.scrollY /13); // Adjust the formula as needed
      const newOpacity = Math.min(1,0 + window.scrollY/500 )

      setOpacity(newOpacity)
      console.log(window.scrollY)
      setLogoWidth(newWidth);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      // Optional settings, you can customize these
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);


  return (
    <div>
      <div className="Home">
      <img src={logo} alt="Logo" style={{ width: `${logoWidth}%`, transition: 'width 0s'}} />
      </div>
      <Navbar/>
      <div className="h-container">
        <div className="h-glass">
          {/* <img src={logo} alt="Logo" style={{ width: `${logoWidth}%`, transition: 'width 0s', marginTop:`${margin}rem` }} /> */}
        </div>
        <div className="h-info" style={{opacity:`${opacity}`,  transition: 'opacity .2s'}}>
          <h1>Info</h1>
          <p>
             Maharashtra Mandal at IIT Kharagpur was established in 2009 by a dedicated group of IIT Kharagpur students who shared a deep admiration for Maharashtra's rich cultural heritage. This student-led initiative was born out of a collective passion to preserve, celebrate, and share the vibrant traditions, festivals, history, and values of Maharashtra. Over the years, what started as a small yet earnest endeavor has blossomed into a thriving cultural society that connects tradition with the contemporary, fostering unity and appreciation within the diverse community of IIT Kharagpur. Through a wide array of engaging events and interactive sessions, we continue to enrich the academic journey by offering students a window into the captivating tapestry of Maharashtra's culture and history Today, Maharashtra Mandal stands as a vibrant cultural society within the IIT Kharagpur community. We've expanded our reach and impact, offering students a chance to immerse themselves in the captivating realm of Maharashtra's culture. Through thoughtfully curated events, interactive discussions, and engaging activities, we aim to kindle a deep appreciation for the diverse facets of Maharashtra's heritage. As we continue this journey, we remain committed to enriching the IIT Kharagpur experience for all, celebrating our roots, and fostering an inclusive environment where tradition and
 modernity converge.</p>
        </div>
        <div className="h-info h-origin" data-aos="fade-right" >
          <h1>Origin</h1>
          <p>Maharashtra Mandal at IIT Kharagpur was established in 2009 by a dedicated group of IIT Kharagpur students who shared a deep admiration for Maharashtra's rich cultural heritage. This student-led initiative was born out of a collective passion to preserve, celebrate, and share the vibrant traditions, festivals, history, and values of Maharashtra. Over the years, what started as a small yet earnest endeavor has blossomed into a thriving cultural society that connects tradition with the contemporary, fostering unity and appreciation within the diverse community of IIT Kharagpur. Through a wide array of engaging events and interactive sessions, we continue to enrich the academic journey by offering students a window into the captivating tapestry of Maharashtra's culture and history Today, Maharashtra Mandal stands as a vibrant cultural society within the IIT Kharagpur community. We've expanded our reach and impact, offering students a chance to immerse themselves in the captivating realm of Maharashtra's culture. Through thoughtfully curated events, interactive discussions, and engaging activities, we aim to kindle a deep appreciation for the diverse facets of Maharashtra's heritage. As we continue this journey, we remain committed to enriching the IIT Kharagpur experience for all, celebrating our roots, and fostering an inclusive environment where tradition and
 modernity converge.</p>
        </div>
        <div className="h-info h-vision" data-aos="fade-left">
         <h1>Our Vision</h1>
         <p>At Maharashtra Mandal, our vision is to create an inclusive and vibrant space that resonates with the essence of Maharashtra while fostering a spirit of unity and growth. We aspire to be a cultural beacon, enriching the IIT Kharagpur experience by weaving the threads of tradition, innovation, and camaraderie into a harmonious tapestry. Our aim is to transcend geographical boundaries, immersing our community in the captivating heritage of Maharashtra. Through a diverse array of events, workshops, and interactive sessions, we endeavor to deepen the understanding and appreciation of Maharashtra's culture, art, history, and values. Fostering an environment that blends tradition and modernity, we aim to cultivate culturally grounded leaders, primed to excel in a global society. Maharashtra Mandal is envisioned as a dynamic platform that celebrates diversity, encourages collaboration, and sparks intellectual curiosity. In the coming years, we envision expanding our reach, creating more meaningful engagements, and forging connections that transcend the confines of our campus. We envision Maharashtra Mandal as a bridge that not only brings Maharashtrians together but also welcomes everyone to celebrate the spirit of Maharashtra, fostering a sense of belonging and unity that reverberates far beyond our boundaries.</p>
        </div>
        {/* <div className="h-count">
          <div className="footfall">
            <h3>Total Footfall</h3>
            <p>20,000</p>
          </div>
          <div className="events">
            <h3>Events</h3>
            <p>6</p>
          </div>
        </div> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Home
