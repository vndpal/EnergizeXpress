import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WeightLog() {
  const [weight, setWeight] = useState("");
  const [weights, setWeights] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sortColumn, setSortColumn] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleWeightSubmit = (event) => {
    event.preventDefault();
    if (weight) {
      setWeights([...weights, { weight, date: selectedDate }]);
      setWeight("");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedWeights = weights.sort((a, b) => {
    if (sortColumn === "weight") {
      return sortOrder === "asc" ? a.weight - b.weight : b.weight - a.weight;
    } else {
      return sortOrder === "asc" ? a.date - b.date : b.date - a.date;
    }
  });

  return (
    <div className="container">
      <h2 className="mb-4">Weight Log</h2>
      <form onSubmit={handleWeightSubmit}>
        <div className="mb-3">
          <label htmlFor="weightInput" className="form-label">
            Enter Weight:
          </label>
          <input
            type="number"
            className="form-control"
            id="weightInput"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="datePicker" className="form-label">
            Select Date:
          </label>
          <br />
          <DatePicker
            id="datePicker"
            className="form-control"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log Weight
        </button>
      </form>
      <div className="mt-4" style={{ maxHeight: "300px", overflowY: "scroll" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th onClick={() => handleSort("date")}>
                Date{" "}
                {sortColumn === "date" && sortOrder === "asc" ? (
                  <i className="bi bi-caret-up-fill"></i>
                ) : (
                  <i className="bi bi-caret-down-fill"></i>
                )}
              </th>
              <th onClick={() => handleSort("weight")}>
                Weight (lbs){" "}
                {sortColumn === "weight" && sortOrder === "asc" ? (
                  <i className="bi bi-caret-up-fill"></i>
                ) : (
                  <i className="bi bi-caret-down-fill"></i>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedWeights.map((w, index) => (
              <tr key={index}>
                <td>{w.date.toLocaleDateString()}</td>
                <td>{w.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeightLog;
