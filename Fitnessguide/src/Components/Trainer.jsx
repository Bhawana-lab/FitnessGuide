import React, { useState } from 'react';
import { trainers } from './Trainers';
import TrainerBanner from '../assets/Pages/TrainerBanner.png';
import TrainerProfile from './TrainerProfile.jsx';
const Trainer = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  return (
    <>
      {/* trainers top part */}
      <section className="py-16  bg-black text-white overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-b from-purple-500 to-white bg-clip-text text-transparent ">Our Expert Trainers</h2>
           <img src={TrainerBanner} alt='' className='h-full w-[90%] inline-flex my-8'/>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" >Fitness trainers are more than coaches — they’re motivators, mentors, and the spark behind every
             transformation. Their guidance turns sweat into strength and goals into victories.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div 
                key={trainer.id}
                className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-purple-500/30"
                onClick={() => setSelectedTrainer(trainer)}
                 style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)`
                }}
              >
                <div className="relative overflow-hidden h-64 md:h-82">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm font-medium">Meet {trainer.name}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">{trainer.name}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{trainer.specialty}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

           {/* View All btn */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4  my-20 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/5 backdrop-blur-sm hover:shadow-xl">
              Dive Deeper
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
     {/* select profile */}
      {selectedTrainer && (
        <TrainerProfile 
          // trainers={trainers}
          trainer={selectedTrainer} 
          onClose={() => setSelectedTrainer(null)} 
        />
      )}
    </>
  );
};

export default Trainer;