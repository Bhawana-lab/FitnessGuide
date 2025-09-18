import React, { useState } from 'react';
import Check from '/src/assets/Pages/Check.png';
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    setSubscribed(true);
    setError('');
    setEmail('');
    
    // reset
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
       {/* top */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Join FitGuide Community
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get exclusive access to personalized workout plans and fitness tips delivered straight to your inbox.
          </p>
        </div>
        {/* card form */}
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address"
                 className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300" />
              <button type="submit"  disabled={subscribed} 
              className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 border border-transparent ${
                  subscribed 
                    ? 'bg-gradient-to-r from-purple-700 to-pink-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                } text-white`}
              >
                {subscribed ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {/* msg */}
            {subscribed && (
              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 text-green-300 mb-4 animate-fade-in">
                Successfully subscribed ! Welcome to our fitness community.
              </div>
            )}
            {error && (
              <div className="text-red-400 text-sm mb-4">{error}</div>
            )}
          </form>
        </div>
        {subscribed && (
          <div className="mt-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
             <img src={Check} alt='' className='h-16 w-16 inline-flex rounded-full'/>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Welcome to FitGuide!</h3>
            <p className="text-gray-300 mb-6">
              You're now part of our fitness community. Check your inbox for a welcome email with your first exclusive content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">Your First Benefit</h4>
                <p className="text-gray-300 text-sm">Get immediate access to our beginner's guide to fitness.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-pink-400 mb-2">Next Steps</h4>
                <p className="text-gray-300 text-sm">We'll send you weekly challenges and progress tracking tools.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;