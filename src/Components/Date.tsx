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
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="Desember">December</option>
          
        </select>
      </label>
      <label>
        Year:
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MonthYearPicker;
