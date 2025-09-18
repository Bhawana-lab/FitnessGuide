import React, { useState } from 'react';
import ProgramDetails from '../Components/Programs/ProgramDetails.jsx';
import HomeProgramList from './HomeProgramList.jsx';
import ProgramConfirmation from '../Components/Programs/ProgramConfirmation.jsx';
const HomeProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const backToPrograms = () => {
    setSelectedProgram(null);
    setShowConfirmation(false);
  };

  const handleStartProgram = () => {
      setShowConfirmation(true);
  }
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  if (showConfirmation && selectedProgram ) {
    return (
      <ProgramConfirmation selectedProgram={selectedProgram} userEmail={userEmail} backToPrograms={backToPrograms}/>
    );
  }
  if (selectedProgram) {
    return (
      <ProgramDetails selectedProgram={selectedProgram} userEmail={userEmail} handleEmailChange={handleEmailChange} handleStartProgram={handleStartProgram} backToPrograms={backToPrograms}/>
    )
  }
  return (
    <HomeProgramList onSelect={setSelectedProgram}/>
  );
};

export default HomeProgram;