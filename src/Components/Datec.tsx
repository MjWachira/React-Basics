import React from 'react';
import MonthYearPicker from './Date';

const MyComponent = () => {
  // Function to handle form submission
  const handleSubmit = (selectedMonth: string, selectedYear: string) => {
    // Do something with selectedMonth and selectedYear
    console.log('Selected Month:', selectedMonth);
    console.log('Selected Year:', selectedYear);
  };

  return (
    <div>
      <h1>My Component</h1>
      <MonthYearPicker onSubmit={handleSubmit} />
    </div>
  );
};

export default MyComponent;
