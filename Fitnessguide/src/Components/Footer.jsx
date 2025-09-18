import Recat from 'react';
import Logo from "/src/assets/Pages/Logo.png";
import Facebook from '/src/assets/Pages/Facebook.png';
import Instagram from '/src/assets/Pages/Instagram.png';
import LinkedIn from '/src/assets/Pages/LinkedIn.png';
import Mail from '/src/assets/Pages/Mail.png';
import Phone from '/src/assets/Pages/Phone.png';
import MapPin from '/src/assets/Pages/Map.png';
import YouTube from "/src/assets/Pages/YouTube.png";
const Footer = () =>{
    return (
        <footer className="bg-black text-white pt-16 pb-8">
          <hr className='w-[80%] h-2 mx-auto text-white pb-20'/>
        <div className="max-w-sm mx-auto flex items-center justify-center gap-x-4 mb-10">
          <img src={Logo}  alt="Logo Image" className="h-24 w-24 m-3 rounded-full"/>
           <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
           FITGUIDE
          </span>
        </div>
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-12 ml-14">
             <div className='flex flex-col w-55 gap-2'>
            {/* <div className="flex items-center mb-6"> */}
            <h3 className="text-lg font-semibold text-purple-400 mb-6">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex items-start text-gray-400 ">
                <img src={Facebook} alt ='facebook' className='h-9 w-9 mr-4 rounded-2xl hover:scale-110 transition-transform duration-300 cursor-pointer mt-0'/> 
                <span className="text-gray-400">fitguide_facebook.com</span>
              </div>
              <div className="flex items-start text-gray-400">
               
                <img src={LinkedIn} alt ='facebook' className='h-9 w-9 mr-4 rounded-2xl hover:scale-110 transition-transform duration-300 cursor-pointer mt-0'/>
                <span className="text-gray-400">fitguide_linkedin.com</span>
               </div>
               <div className="flex items-start text-gray-400">
                <img src={Instagram} alt ='facebook' className='h-9 w-9 mr-4 rounded-2xl hover:scale-110 transition-transform duration-300 cursor-pointer mt-0'/>
                <span className="text-gray-400">fitguide_instagram.com</span>
              </div>
              <div  className="flex items-start text-gray-400">
                <img src={YouTube} alt ='facebook' className='h-9 w-9 mr-4 rounded-2xl hover:scale-110 transition-transform duration-300 cursor-pointer mt-0'/> 
                <span className="text-gray-400">fitguide_youtube.com</span>
             </div>
             </div>
          </div>
           <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-6">Support</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Refund Policy</a></li>
            </ul>
          </div>
            <div className='flex flex-col w-55 gap-4'>
            <div className="flex items-center mb-6"> 
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-6 mt-0">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <img src={Mail} alt='mail' className="h-8 w-8 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">info@fitguide.com</span>
              </div>
               <div className="flex items-start">
               <img src={Phone} alt='mail' className="h-8 w-8 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">+91 9999999999</span>
              </div>
              <div className="flex items-start">
                <img src={MapPin} alt='mail' className="h-8 w-8 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">123 Fitness Health City 1234</span>
              </div>
            </div>
          </div>
           </div>
          </div>
        </div>
        <hr className='w-[40%] h-1.5 mx-auto text-white pb-20'/>
         <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-md">
              &#169; 2025 FITGUIDE. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
        </div>
    </footer>
  );
};
export default Footer;