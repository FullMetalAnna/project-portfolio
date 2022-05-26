import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()


    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
        'gmail',
        'template_hg2s4ts',
        refForm.current,
        'user_sadwi928320das'
    )
    .then(
        () => {
            alert('Message sent')
            window.location(false)
        },
        () => {
            alert('Fail to send message')
        }
    )
}
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                     />
                </h1>
                <p>Follow along and look into my personal projects on GitHub and don't be afraid to ask the question or give suggestion.</p>

                     <div className="contact-form">
                         <form ref={refForm} onSubmit={sendEmail}>
                             <ul>
                                 <li className="half">
                                     <input type='text' name='name' placeholder='Name' required />
                                 </li>
                                 <li className='half'>
                                     <input type='email' name='email' placeholder='Email' required />
                                 </li>
                                 <li>
                                     <input type='text' name='subject' placeholder='Subject' required />
                                 </li>
                                 <li>
                                     <textarea placeholder='Message' name='message' required></textarea>
                                 </li>
                                 <li>
                                     <input type='submit' className='flat-button' value="SEND" /> 
                                 </li>
                             </ul>
                         </form>
                     </div>
              
            </div>
            <div className='info-map'>
                Ana Bosnjakovic,
                <br />
                Serbia,
                <br />
                Novi Sad, 21000 <br />
                <span>anabs91@yahoo.com</span>
            </div>
            <div className="map-wrap">
          <MapContainer center={[45.2396, 19.8227]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>My city: Novi Sad</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>


<Loader type='pacman' />        
        
        
        </>
    )
}

export default Contact