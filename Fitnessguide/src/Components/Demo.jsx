import React, { useState}  from 'react';
import DemoPoster from '../assets/Pages/DemoPoster.png';
const Demo = () =>{
    return(
        <div className='min-h-screen bg-black/50 flex items-center justify-center px-4'>
        <div className='w-full max-w-3xl aspect-video'>
            <iframe 
            src='https://youtube.com/embed/uRpqCHjQtuA'
            title='Demo Video of FITGUIDE'
            frameborder='0'
            loading='eager'
            name='FITGUIDE DEMO VIDEO'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loop controls muted className='border border-gray-400 w-full h-full rounded'>

            </iframe>
        </div>
        </div>
     
    );
}
export default Demo;