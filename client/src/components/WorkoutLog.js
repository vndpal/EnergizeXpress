import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function WorkoutLog() {
  const [workout, setWorkout] = useState('');
  const [weight, setWeight] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workoutLogs, setWorkoutLogs] = useState([]);

  const handleWorkoutChange = (event) => {
    setWorkout(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleWorkoutSubmit = (event) => {
    event.preventDefault();
    if (workout && weight && sets && reps) {
      setWorkoutLogs([
        ...workoutLogs,
        {
          workout,
          weight,
          sets,
          reps,
          date: selectedDate.toLocaleDateString(),
        },
      ]);
      setWorkout('');
      setWeight('');
      setSets('');
      setReps('');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Workout Log</h2>
      <form onSubmit={handleWorkoutSubmit}>
        <div className="mb-3">
          <label htmlFor="workoutInput" className="form-label">
            Workout:
          </label>
          <input
            type="text"
            className="form-control"
            id="workoutInput"
            value={workout}
            onChange={handleWorkoutChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weightInput" className="form-label">
            Weight (lbs):
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
          <label htmlFor="setsInput" className="form-label">
            Sets:
          </label>
          <input
            type="number"
            className="form-control"
            id="setsInput"
            value={sets}
            onChange={handleSetsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repsInput" className="form-label">
            Reps:
          </label>
          <input
            type="number"
            className="form-control"
            id="repsInput"
            value={reps}
            onChange={handleRepsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateInput" className="form-label">
            Select Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="dateInput"
            value={selectedDate.toISOString().substr(0, 10)}
            onChange={handleDateChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log Workout
        </button>
      </form>
      <div className="mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Workout</th>
              <th>Weight (lbs)</th>
              <th>Sets</th>
              <th>Reps</th>
            </tr>
          </thead>
          <tbody>
            {workoutLogs.map((log, index) => (
              <tr key={index}>
                <td>{log.date}</td>
                <td>{log.workout}</td>
                <td>{log.weight}</td>
                <td>{log.sets}</td>
                <td>{log.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkoutLog;
