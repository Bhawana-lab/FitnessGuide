import './App.css'
import React ,{ useState } from 'react';
import Navbar2 from "./Components/Navbar2.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  const [showDemo, setShowDemo] = useState( false);
 
  return (
  
      <div className="bg-black min-h-screen">
          <Navbar2 showDemo={showDemo} setShowDemo={setShowDemo}/>
          <Footer/> 
      </div>
  );
};

export default App;
  {/* <main>
          {showLogin ? (
             <LoginSignUp closeLogin={()=> setShowLogin(false)}/> 
          ): (     
            <>
            </>
          )} 
        </main>*/}
