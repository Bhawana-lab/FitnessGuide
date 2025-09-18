import React from 'react';
import Confirm from '../../assets/Pages/Confirm.png';
import AccessDashboard from '../../assets/Pages/AccessDashboard.png';
import Progress from '../../assets/Pages/Progress.png';
import Support from '../../assets/Pages/Support.png';
import Back from '../../assets/Pages/Back.png';
const ProgramConfirmation = ({selectedProgram, userEmail, backToPrograms})=>{
    return(
       <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* top */}
        <header className="py-16 px-8 flex items-center justify-between border-b border-white/10">
          <button 
            onClick={()=>{backToPrograms(), window.scrollTo(0,0)}}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <img src={Back} alt="" className='w-4 h-4' />
            <span> Go Back</span>
          </button>
          <div className="text-center">
            <h1 className="text-3xl -ml-6 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Confirmation
            </h1>
          </div>
          <div className="w-10"></div>
        </header>

  {/* condirma n */}
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
                <img src={Confirm} alt="Confirmation Image" className='inline-flex h-28 w-28 rounded-full mb-6' />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Congratulations!
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                You've successfully enrolled in {selectedProgram.title} Your personalized program will begin immediately.
              </p>
            </div>

            {/* summary */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto mb-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-white">Your Program Details</h3>
                <div className="space-y-3 text-gray-300">
                  <p><span className="font-medium">Program:</span> {selectedProgram.title}</p>
                  <p><span className="font-medium">Duration:</span> {selectedProgram.duration}</p>
                  <p><span className="font-medium">Price:</span> {selectedProgram.price}</p>
                  <p><span className="font-medium">Email:</span> {userEmail}</p>
                  <p className="text-green-400 font-medium mt-4"> Access granted - Check your email for login instructions!</p>
                </div>
              </div>
            </div>

            {/* track part*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <img src={AccessDashboard} alt=" Access your Dashboard" className='h-12 w-12 rounded-full inline-flex mb-4'/>
                <h4 className="text-lg font-semibold text-white mb-2">Access Your Dashboard</h4>
                <p className="text-gray-300 text-sm">Log in to your account to start your first workout immediately.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                 <img src={Progress} alt="Progess" className='w-12 h-12 rounded-full inline-flex mb-4'/>
                <h4 className="text-lg font-semibold text-white mb-2">Track Progress</h4>
                <p className="text-gray-300 text-sm">Monitor your improvements with detailed analytics and performance metrics.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <img src={Support} alt=""  className='w-12 h-12 rounded-full inline-flex'/>
                <h4 className="text-lg font-semibold text-white mb-2">Get Support</h4>
                <p className="text-gray-300 text-sm">Our fitness coaches are available 24/7 to answer your questions.</p>
              </div>
            </div>

            {/*strat pgm*/}
            <button 
              onClick={()=>{backToPrograms(), window.scrollTo(0,0)}}
              className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 text-lg"
            > Start My First Workout Now
            </button>
          </div>
        </section>
      </div>
    );
}
export default ProgramConfirmation;