import React, { useState } from 'react';
import './App.css';
import StudentEnrollmentForm from './components/StudentEnrollmentForm';
import DisplayData from './components/DisplayData';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <h2>Student Enrollment Form</h2>
          <StudentEnrollmentForm onSubmit={handleFormSubmit} />
        </div>
        <div className="right">
          {submittedData && (
            <DisplayData data={submittedData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;