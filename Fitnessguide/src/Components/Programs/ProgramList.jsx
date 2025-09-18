import React, {useState} from 'react';
import ProgramBanner from '/src/assets/Pages/ProgramBanner.png';
import { workoutPrograms } from './workoutPrograms.js';
const ProgramList = ({ onSelect}) =>{
    // const [selectedProgram, setSelectedProgram] = useState(null);
    return (
     <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <section id="programs" className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
              {/* top part */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Workout Programs
                </h2>
                <img src={ProgramBanner} alt='' className='h-full w-[90%] inline-flex my-8'/>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our scientifically designed programs tailored to help you reach your fitness goals, whether you're a beginner or advanced athlete.
                </p>
              </div>
    
              {/* pgm grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workoutPrograms.map((program, index) => (
                  <div 
                    key={program.id}
                    className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-purple-500/30"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)`
                    }}
                  >
                    {/* img */}
                    <div className="relative overflow-hidden h-64 md:h-72">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>
    
                    {/*about*/}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      
                      {/* startt btn */}
                      <button 
                        onClick={() => {onSelect(program),onSelect(program), window.scrollTo(0,0)}}
                        className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                      >Start Program
                      </button>
                    </div>
                  </div>
                ))}
              </div>
    
              {/* view all btn */}
              <div className="text-center mt-12">
                <button 
                className="inline-flex items-center px-8 py-4 my-20 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/5 backdrop-blur-sm hover:shadow-xl">
                  View All Programs
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </section> 
        </div>
        );
}
export default ProgramList;