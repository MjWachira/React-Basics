import React, { useState, ChangeEvent, FormEvent } from 'react';

interface MonthYearPickerProps {
  onSubmit: (selectedMonth: string, selectedYear: string) => void;
}

const MonthYearPicker: React.FC<MonthYearPickerProps> = ({ onSubmit }) => {
  // State for selected month and year
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  // Function to handle month change
  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  // Function to handle year change
  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call the onSubmit prop with selectedMonth and selectedYear
    onSubmit(selectedMonth, selectedYear);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Month:
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          {/* Add more months */}
        </select>
      </label>
      <label>
        Year:
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          {/* Add more years */}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MonthYearPicker;
