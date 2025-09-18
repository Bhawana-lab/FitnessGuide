import React, { useState} from "react";
import Logo from '/src/assets/Pages/logo.png';
import Hero from "./Hero";
import Demo from "./Demo";
import Program from "./Programs/Program.jsx";
import Trainer from "./Trainer";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import LoginPage from '/src/assets/Pages/LoginPage.png';
import LoginSignUp from "./LoginSignUp.jsx";
import HomeProgram from "./HomeProgram.jsx";
import Newsletter from "./NewsLetter.jsx";
const Navbar2 =( {showDemo, setShowDemo}) =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [currentPage, setCurrentPage] = useState('/');
     const [showLogin, setShowLogin] =useState(false);
    const closeMenu = () =>{
      setMenuOpen(false);
    }
    const toggleMenu = () =>{
      setMenuOpen(!menuOpen);
    }
    const renderContent = () =>{
        switch (currentPage){
            case '/':
              if(showDemo){
                return <Demo/>
              }
                return <div><Hero onWatchDemo={() => setShowDemo(true)} />,<HomeProgram/>,<Newsletter/></div>
            case '/program':
                return <div><Program/></div>
            case '/trainer':
                return <div><Trainer/></div>
            case '/success':
                return <div><Testimonial/></div>
            case '/contact':
                return <div><Contact/></div>
            case '/login'|| '/signup':
              return <div><LoginSignUp/></div>
            default :
                return null;
        }
    }
  return (
  <div>
     <div className={`fixed top-0 w-full bg-black text-white z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-md border-b border-white border-opacity-20' : 'bg-transparent'
      }`}>
        <div className=' bg-black/90 max-w-full mx-auto px-6 sm:px-8 lg:px-8'>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex-shrink-0 flex items-center'>
              <img src={Logo} alt="Logo Image" className="h-20 w-20 sm:h-20 md:h-20 md-w-20 rounded-full mr-2 mt-1 pt-2"/>
              <span className='text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                FITGUIDE
              </span>
            </div>
         {/* linkkkkss */}
            <nav>
            <div className="hidden md:flex items-center space-x-8">
              
            <div className="flex  items-center space-x-12 cursor-pointer">
            <div className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group ${
                    scrollY > 50 ? 'hover:text-purple-400' : ''
                  }`} onClick ={ () => {setCurrentPage ('/'),setShowDemo(false),window.scrollTo(0, 0); }}>Home
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full'></span>
             </div>         
            <div className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group ${
                    scrollY > 50 ? 'hover:text-purple-400' : ''
                  }`} onClick ={ () => {setCurrentPage ('/program'),window.scrollTo(0, 0); }}>Program
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full'></span>
             </div>          
            <div className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group ${
                    scrollY > 50 ? 'hover:text-purple-400' : ''
                  }`} onClick ={ () => {setCurrentPage ('/trainer'),window.scrollTo(0, 0)}}>Trainer
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full'></span>
           </div>        
            <div className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group ${
                    scrollY > 50 ? 'hover:text-purple-400' : ''
                  }`} onClick ={ () => {setCurrentPage ('/success'),window.scrollTo(0, 0);}}>Success Stories
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full'></span>
            </div>
             <div className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group ${
                    scrollY > 50 ? 'hover:text-purple-400' : ''
                  }`} onClick ={ () => {setCurrentPage ('/contact'),window.scrollTo(0, 0);}}>Contact Us
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full'></span>
            </div>
            {/* btnn */}
             <button 
                onClick ={ () => {closeMenu(), setCurrentPage ('/program') }} 
                className='bg-gradient-to-r from-purple-500  hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out 
             transform  hover:scale-105 shadow-lg hover:shadow-purple-600/30'
              >Get Started
              </button>  
              {/* login / signup btn */}
              <button onClick={() => {setCurrentPage('/login','/signup'),setShowLogin(true), window.scrollTo(0,0)}} className="px-4 py-2  hover:to-pink-700 transition-all duration-200"
                > <img src={LoginPage} alt='' className="h-12 w-12 rounded-full"/>
                  </button>        
             </div>
             </div>
          </nav>            
              <div className='md:hidden flex items-center'>
              <button onClick={toggleMenu} className='flex flex-col text-gray-300 gap-[4.5px] hover:text-white focus:outline-none cursor-pointer'>
                <div className={`w-6 h-1 bg-gray-400 rounded-sm ${menuOpen ? 'rotate-45': ''} origin-left ease-in-out duration-500`}></div>
               <div className={`w-6 h-1 bg-gray-400 rounded-sm ${menuOpen ? 'opacity-0': ''}`}></div>
               <div className={`w-6 h-1 bg-gray-400 rounded-sm ${menuOpen ? '-rotate-45': ''} origin-left ease-in-out duration-500`}></div>
              </button>
            </div>
          </div> 
        </div>        
    </div>
    {renderContent()}        
     {/* mobile menu   */}    
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}>
             { menuOpen &&
             <div className="md-hidden fixed top-16 left-0 w-full z-40 bg-black/95 backdrop-blur-sm border-t border-whiteborder-opacity-10 transition-all duration-500 ease-in-out">
            <div className='px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm border-t border-white border-opacity-10'>
            <div className="relative w-full text-center group py-4">
                <div
                  onClick={() => { closeMenu(), setCurrentPage('/'), setShowDemo(false), window.scrollTo(0, 0);  }}        
                  className="text-gray-300 hover:text-purple-300 font-semibold transition-colors duration-300"> Home               
                </div>
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"
                ></span>
            </div>
             <div className="relative w-full text-center group py-4">
                <div onClick={() => {  setCurrentPage('/program'), closeMenu(),window.scrollTo(0, 0); }}         
                  className="text-gray-300 hover:text-purple-300 font-semibold transition-colors duration-300">Program
                </div>
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"
                ></span>
            </div>
             <div className="relative w-full text-center group py-4">
                <div onClick={() => { closeMenu(),setCurrentPage('/trainer'),window.scrollTo(0, 0); }}             
                  className="text-gray-300 hover:text-purple-300 font-semibold transition-colors duration-300">  Trainer               
                </div>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"
                ></span>
            </div>
             <div className="relative w-full text-center group py-4">
                <div onClick={() => {  closeMenu(),setCurrentPage('/success'),window.scrollTo(0, 0) }}           
                  className="text-gray-300 hover:text-purple-300 font-semibold transition-colors duration-300">Success Stories
                </div>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"
                ></span>
            </div>
             <div className="relative w-full text-center group py-4">
                <div  onClick={() => {  closeMenu(),setCurrentPage('/contact'),window.scrollTo(0, 0);                
                  }} className="text-gray-300 hover:text-purple-300 font-semibold transition-colors duration-300">Contact Us
                </div>
                <span  className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"
                ></span>
            </div>
             <button onClick={()=>{closeMenu(), setCurrentPage('/program'),window.scrollTo(0, 0);}}
                className='w-full text-center px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 mt-3 transform hover:scale-105 shadow-lg' >Get Started               
              </button>
              {/* {renderContent()} */}
          </div>
          </div>
          }          
       </div>
  </div>   
    );
}
export default Navbar2;