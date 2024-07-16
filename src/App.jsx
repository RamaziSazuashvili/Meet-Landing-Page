import { useState } from 'react'
import image_hero_left from './assets//desktop/image-hero-left.png'
import image_hero_right from './assets//desktop/image-hero-right.png'
import image_woman_in_videoCall from './assets/desktop/image-woman-in-videocall.jpg'
import image_women_videoChatting from './assets/desktop/image-women-videochatting.jpg'
import image_man_texting from './assets/desktop/image-man-texting.jpg'
import image_men_in_meeting from './assets/desktop/image-men-in-meeting.jpg'
import image_footer from './assets/desktop/image-footer.jpg'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body red-hat-display">
        <header>
            <nav className="nav-bar">
              <a href="index.html" className="home-page-logo">
                <img src={logo} alt="home-page-logo" />
              </a>
            </nav>
        </header>
        <main className="main">
          <section className='group-chat-for-everyone'>
          <div><img src={image_hero_left} alt='image-hero-left'></img></div>
          <div className='text-box'>
            <h1 className='title'>Group Chat for Everyone</h1>
            <p className='description'>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device</p>
            <div className='button-box'>
            <button className='download-button'>Download <span className='download-version'>v1.3</span></button>
            <button className='question-button'>What is it?</button>
            </div>
          </div>
          <div><img src={image_hero_right} alt='image-hero-right'></img></div>
          <div></div>
          </section>

          <section className='num-01'>
            <div className='line'></div>
            <div className='circle-01'><p className='number-01'>01</p></div>
          </section>

          <section className='images-section'>
            <div className='image-container'>
              <img src={image_woman_in_videoCall} alt='image-woman-in-videocall' className='image'></img>
              <img src={image_women_videoChatting} alt='image-women-videochatting' className='image'></img>
              <img src={image_man_texting} alt='image-man-texting' className='image'></img>
              <img src={image_men_in_meeting} alt='image-men-in-meeting' className='image'></img>
            </div>
          </section>

          <section className='images-description'>
            <div className='text-box2'>
              <h4 className='title2'>BUILT FOR MODERN USE</h4>
              <h3 className='title3'>Smarter meetings, all in one place</h3>
              <p className='description2'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
            </div>
          </section>

          <footer className='footer'>
            <div className='footer-wrapper'>
              <img src={image_footer} alt="image-footer" className='footer-img'></img>
              <div className='footer-img-overlay'></div>
            </div>
              <div className='num-02'>
                <div className='line2'></div>
                <div className='circle-02'><p className='number-02'>02</p></div>
              </div>
              <div className='footer-text-box'>
                <h2 className='footer-title'>Experience more together</h2>
                <p className='footer-description'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
                <button className='footer-button'>Download<span className='footer-version'>v1.3</span></button>
              </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
