import React from 'react';
import './Hero.css';
import Scroll from '../assets/Pages/scrollDown.png';
const Hero = ({ onWatchDemo}) =>{
  //   const [isMenuOpen, setIsMenuOpen]=useState(false);
  // const closeMenu = () =>{
  // setIsMenuOpen(false);
  // }

  // const component=()=> {
  //   const navigate= useNavigate();
  // }
  const scrollDownOnePage = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
    return (
      <div className='relative pt-16 h-screen flex items-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/95 to-black/90'>

          </div>
          <div className='absolute inset-0 bg-cover bg-center w-full h-screen bg-no-repeat filter brightness-40 saturate-110'
          style={{backgroundImage: `url('https://placehold.co/1920x1080/1a1a1a/ffffff?text=Fitness+Inspiration')`,
          backgroundAttachment: 'fixed',
          }}
          ></div>
          <div className='absolute inset-0 bg-gradient-to-br from-transparent via-black/40 to-transparent'>
          </div>
          {/* animation particles */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(20)].map((bubbles, i) => (
             <div key={i}
             className='absolute w-4 h-4  bg-gradient-to-r from-purple-400 rounded-full animate-pulse'
             style={{
              left:`${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              // right: `${Math.random()*100}%`,
              animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${2+Math.random()*4}s`,
              opacity: Math.random()*0.5+0.3
                   }}>
              </div>
            ))}
        </div>
        {/* contentt */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center'>
          <div className='animate-fadeInUp'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-10 leading-tight tracking-tight mt-0'>
              <span className='block text-gray-300'>Transform Your</span>
              <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 bg-clip-text text-transparent text-shadow-lg'>Fitness Journey</span>
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-50 mb-10 max-w-4xl mx-auto leading-relaxed font-light tracking-wide font-bold-600'>
              <span className='text-shadow-lg'>
               Discover personalized workout plans, expert nutrition guidance, and proven strategies 
              to build strength, burn fat, and achieve your dream physique. Join thousands who've transformed their lives.
              </span>
            </p>
            {/* main btn */}

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
              <button
              onClick={scrollDownOnePage}
              className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/30 animate-pulse cursor-pointer'
              style={{
                textShadow: '0 2px 10px rgba(139, 92, 246, 0.3)',
                boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
              }}
              >Get Started
              </button>
              {/* {currentPage== '/program' && <Program/>} */}
              <button
              onClick={onWatchDemo}
              className='border-2 border-white/40 hover:border-white/60 text-white font-medium text-lg py-4 px-10 rounded-full transition-all duration-500 hover:bg-white/5 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer'
              style={{
                textShadow: '0 2px 8px rgba(255, 255, 255, 0.2)',
                boxShadow: '0 5px 15px rgba(255, 255, 255, 0.1)'
              }}
              >Watch Demo
              </button>
            </div>
            <div className='flex flex-wrap justify-center gap-8 mt-12 text-center'>
              <div className='text-center transform hover:scale-105 transition-transform duration-300'>
                <div className='text-2xl sm:text-3xl font-bold text-purple-400 animate-pulse'>250K+</div>
                <div className='text-gray-300 text-sm sm:text-base mt-1'>Members Trained</div>
              </div>
              <div className='text-center transform hover:scale-105 transition-transform duration-300'>
                <div className='text-2xl sm:text-3xl font-bold text-purple-400 animate-pulse'>98%</div>
                <div className='text-gray-300 text-sm sm:text-base mt-1'>Success Rate</div>
              </div>
              <div className='text-center transform hover:scale-105 transition-transform duration-300'>
                <div className='text-2xl sm:text-3xl font-bold text-purple-400 animate-pulse'>24/7</div>
                <div className='text-gray-300 text-sm sm:text-base mt-1'>Expert Support</div>
              </div>
            </div>
          </div>
        </div>
        <div>  
        </div>
        {/* animate scroller */}
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
         <div className='flex flex-col items-center text-gray-400'>
          <img src={Scroll} alt="" className='w-8 h-8 mt-10'/>
          <span className='text-xs font-medium'>Scroll Down</span>
         </div>
        </div>  
       </div>
      </div>     
    );
};
export default Hero;