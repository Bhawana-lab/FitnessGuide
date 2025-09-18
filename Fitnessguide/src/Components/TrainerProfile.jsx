import React from 'react';
import './TrainerProfile.css';
import Cross from '../assets/Pages/Cross.png';
import Star from '../assets/Pages/Star.png';
const TrainerProfile =({ trainer, onClose}) =>{
    return (
        <div  className="py-30 bg-gray-900/50">
              <div className="fixed inset-0 bg-black text-white bg-opacity-60 flex items-center justify-center p-4 z-50">
                <div className="bg-black/50 rounded-2xl max-w-4xl w-full max-h-full overflow-y-auto hide-scrollbar">
                  {/* Header */}
                  <div className="relative">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-full h-120 mt-10 object-cover rounded-t-2xl"
                    />
                    <button 
                      onClick={onClose}>
                    <img src={Cross} alt="" className='absolute top-4 right-4 h-9 w-9 rounded-full'/>
                    </button>
                  </div>
        
                  {/* Content */}
                  <div className="py-20 bg-gray-900/50">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{trainer.name}</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{trainer.specialty}</p>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex items-center">
                        <div className="flex items-center bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 rounded-full">
                          <img src={Star} alt='' className='h-6 w-6 rounded-4xl'/>
                          <span className="ml-1 font-medium text-gray-300">{trainer.rating}</span>
                          <span className="ml-1 text-gray-300">({trainer.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
        
                    {/* Bio Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-300 mb-4">About {trainer.name}</h2>
                      <p className="text-lg text-gray-300 leading-relaxed">{trainer.bio}</p>
                    </div>
        
                    {/* Certifications */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-300 mb-4">Certifications</h3>
                      <div className="flex flex-wrap gap-2">
                        {trainer.certifications.map((cert, index) => (
                          <span 
                            key={index}
                            className="bg-gradient-to-r from-purple-400 to-pink-400 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
        
                    {/* Availability */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-300 mb-4">Availability</h3>
                      <div className="flex flex-wrap gap-2">
                        {trainer.availability.map((day, index) => (
                          <span 
                            key={index}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>
        
                    {/* Booking Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                        Book a Session
                      </button>
                      <button className="border-2 border-purple-600 text-purple-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-purple-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                        View Schedule
                      </button>
                    </div>
        
                    {/* Testimonial */}
                    <div className="mt-12 p-6 bg-gradient-to-r from-gray-500 to-pink-10 rounded-xl border-4">
                      <blockquote className="text-black-300 italic text-lg">
                        "{trainer.name}'s training program completely transformed my fitness journey. I've never felt stronger or more confident!"
                      </blockquote>
                      <p className="text-right text-gray-300 mt-2">— Client since 2020</p>
                    </div>
                  </div>
                </div>
               </div>
              </div>
    );
}
export default TrainerProfile;