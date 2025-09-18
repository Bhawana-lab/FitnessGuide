import React from 'react';
import { homeworkoutprograms } from './homeworkoutprograms.js';
import './HomeProgramList.css'; 
const HomeProgramList = ({ onSelect }) => {
  // for loop
  const scrollingPrograms = [...homeworkoutprograms, ...homeworkoutprograms];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section id="programs" className="py-40 bg-gray-900/50">
        <div className="max-w-full overflow-hidden px-8 sm:px-12 lg:px-12">
          {/* top */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-30 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Programs That Match Your Fitness Goals
            </h2>
          </div>
            {/* scrolling taskk */}
          <div className="scrolling-wrapper relative">
            <div className="flex space-x-16 overflow-x-auto pb-8 scrollbar-hide mx-20">
              {scrollingPrograms.map((program, index) => (
                <div
                  key={`${program.id}-${index}`}
                  className="scroll-item flex-shrink-0"
                  onClick={() => {
                    onSelect(program);
                    window.scrollTo(0, 0);
                  }} > 
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl shadow-lg hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                    <img src={program.image}   alt={program.title}    className="w-[100%] h-84 object-cover rounded-xl"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        Popular
                      </span>
                    </div>
                       {/* desc */}
                    <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                       {program.title}
                    </h3>
                   <p className="text-sm text-white  line-clamp-2">
                      {program.description}
                    </p>
                     <button 
                        onClick={() => {onSelect(program),onSelect(program), window.scrollTo(0,0)}}
                        className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                      >  Start Program
                      </button>
                       </div> 
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProgramList;
