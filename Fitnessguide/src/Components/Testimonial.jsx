import React, { useState, useEffect } from 'react';
import { testimonials } from './Testimonials.js';
import Prev from '/src/assets/Pages/Prev.png';
import Next from '/src/assets/Pages/Next.png';
const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Fitness Inspiration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from people who transformed their lives through our fitness programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* cards */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-purple-500/20 relative z-10">
            <div className="flex justify-center mb-6">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full border-4 border-purple-500/30 object-cover shadow-lg"
              />
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-200 mb-6 italic leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            <div>
              <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
              <p className="text-purple-400 font-medium">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>

          {/*previous btns */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-gray-700 transition-all duration-300 text-purple-300 hover:text-purple-200 z-20"
            aria-label="Previous testimonial"
          ><img src={Prev} alt='' className='h-9 w-9 rounded-full'/>
          </button>
          {/* next btn */}
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-gray-700 transition-all duration-300 text-purple-300 hover:text-purple-200 z-20"
            aria-label="Next testimonial"
          ><img src={Next} alt='' className='h-9 w-9 rounded-full'/>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View (Optional) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border border-purple-500/10"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-purple-500/20 object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-purple-400">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 text-sm italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;