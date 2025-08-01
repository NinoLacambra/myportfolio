import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile2.png'

const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Niño Lacambra
          </h2>
          {/* Skills */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'> I am </span>
            <ReactTypingEffect text={[
              'FullStack Developer', 'App Developer', 'UI/UX Designer', 'Coder' ]} speed={100} eraseSpeed={50} typingDelay={500} eraseDelay={2000} cursorRenderer= {(cursor) => (<span className='text-[#8245ec]'>{cursor}</span>)}/>
          </h3>
          {/** About Me */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-tight'>
             I’m Niño C. Lacambra, a Computer Engineering graduate from the Polytechnic University of the Philippines. At NTEKSystems Inc., I gained hands-on experience in full stack development, working on both front-end and back-end tasks. I also served as a web server analyst at Direc Business Technologies Inc., where I deepened my understanding of server management and system analysis. These experiences have equipped me with a solid technical foundation and a strong drive to grow in the IT industry.
          </p>
          {/** Resume Part */}
          <a href="https://drive.google.com/file/d/1TxqDcvnyZEv4U-xUobO8gdinP1A2mLWU/view?usp=sharing" target='_blank' rel='noopener norenderer' className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className='md:w-1/2 flex justify-center md:justify-end'>
            <Tilt
            className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}> 
              <img src={profileImage} alt="Niño Lacambra" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)]' />
            </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
