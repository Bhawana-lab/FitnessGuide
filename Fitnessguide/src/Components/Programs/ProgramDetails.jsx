import React, { useState } from 'react';
import Back from '/src/assets/Pages/Back.png';
import Check from '/src/assets/Pages/Check.png';
const ProgramDetails = ({selectedProgram, userEmail, handleEmailChange, handleStartProgram, backToPrograms}) =>{
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* header */}
        <header className="px-8 flex items-center justify-between border-b border-white/10">
          <button 
            onClick={()=>{backToPrograms(), window.scrollTo(0,0)}}
             className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors duration-300 pt-16" >
            <img src={Back} alt="Back Image" className="w-4 h-4" />
            <span>Back to Programs</span>
          </button>
          <div className="text-center pt-28">
            <h1 className="text-4xl font-bold  bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Workout Program
            </h1>
          </div>
          <div className="w-12"></div>
        </header>

        {/* program part */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/*imagesssss */}
            <div className="relative rounded-3xl overflow-hidden mb-8 h-80 md:h-96">
              <img 
                src={selectedProgram.image} 
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {selectedProgram.difficulty}
                </span>
              </div>
            </div>

            {/* Title and Description */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {selectedProgram.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            {/* Program Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Duration</h3>
                <p className="text-2xl font-bold text-white">{selectedProgram.duration}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Calories Burned</h3>
                <p className="text-2xl font-bold text-white">{selectedProgram.calories}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Price</h3>
                <p className="text-2xl font-bold text-white">{selectedProgram.price}</p>
              </div>
            </div>

            {/* inside */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedProgram.details.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10"
                  >
                      <img src={Check} alt="Check Image" className=' flex-shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center' />
                    <p className="text-gray-300 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/*  access */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Get Started Today</h3>
              <p className="text-gray-300 text-center mb-8">Enter your email to receive instant access to your personalized program.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={userEmail}
                  onChange={handleEmailChange}
                  className="flex-grow px-6 py-4 bg-gray-800/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  onClick={()=>{handleStartProgram(),window.scrollTo(0,0)}}
                  disabled={!userEmail || !userEmail.includes('@')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Start My Program
                </button>
              </div>
              
              {userEmail && !userEmail.includes('@') && (
                <p className="text-red-400 text-sm text-center mb-4">Please enter a valid email address</p>
              )}
              
              <p className="text-gray-400 text-sm text-center mt-4">
                By clicking "Start My Program", you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}
export default ProgramDetails