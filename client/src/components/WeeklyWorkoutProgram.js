import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function WeeklyWorkoutProgram() {
  const [selectedDay, setSelectedDay] = useState('');
  const [workoutName, setWorkoutName] = useState('');
  const [workout, setWorkout] = useState('');
  const [sets, setSets] = useState('');
  const [weights, setWeights] = useState([]);
  const [reps, setReps] = useState([]);
  const [workoutProgram, setWorkoutProgram] = useState([]);

  useEffect(() => {
    // Load the workout program from local storage on component mount
    const savedProgram = localStorage.getItem('weeklyWorkoutProgram');
    if (savedProgram) {
      setWorkoutProgram(JSON.parse(savedProgram));
    }
  }, []);

  useEffect(() => {
    // Save the workout program to local storage whenever it changes
    localStorage.setItem('weeklyWorkoutProgram', JSON.stringify(workoutProgram));
  }, [workoutProgram]);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleWorkoutNameChange = (event) => {
    setWorkoutName(event.target.value);
  };

  const handleWorkoutChange = (event) => {
    setWorkout(event.target.value);
  };

  const handleSetsChange = (event) => {
    setSets(event.target.value);
    setWeights([]);
    setReps([]);
  };

  const handleWeightChange = (event, index) => {
    const newWeights = [...weights];
    newWeights[index] = event.target.value;
    setWeights(newWeights);
  };

  const handleRepsChange = (event, index) => {
    const newReps = [...reps];
    newReps[index] = event.target.value;
    setReps(newReps);
  };

  const handleSaveWorkout = () => {
    if (
      selectedDay &&
      workoutName &&
      workout &&
      sets &&
      weights.length > 0 &&
      reps.length > 0
    ) {
      const program = [...workoutProgram];
      const existingDay = program.find((day) => day.day === selectedDay);

      if (existingDay) {
        existingDay.workouts.push({
          name: workoutName,
          workout,
          sets,
          weights,
          reps,
        });
      } else {
        program.push({
          day: selectedDay,
          workouts: [
            { name: workoutName, workout, sets, weights, reps },
          ],
        });
      }

      setWorkoutProgram(program);
      setWorkoutName('');
      setWorkout('');
      setSets('');
      setWeights([]);
      setReps([]);
    }
  };

  const handleWorkoutSubmit = (event) => {
    event.preventDefault();
    // Implement the desired logic when submitting the workout form
    // For example, you can handle form validation or perform an API request
  };

  const renderSetInputs = () => {
    const setInputs = [];

    for (let i = 0; i < sets; i++) {
      setInputs.push(
        <div key={i} className="mt-3">
          <div>Set {i + 1}</div>
          <div className="mb-2">
            <label htmlFor={`weightInput${i}`} className="form-label">
              Weight (lbs):
            </label>
            <input
              type="number"
              className="form-control"
              id={`weightInput${i}`}
              value={weights[i] || ''}
              onChange={(e) => handleWeightChange(e, i)}
            />
          </div>
          <div>
            <label htmlFor={`repsInput${i}`} className="form-label">
              Reps:
            </label>
            <input
              type="number"
              className="form-control"
              id={`repsInput${i}`}
              value={reps[i] || ''}
              onChange={(e) => handleRepsChange(e, i)}
            />
          </div>
        </div>
      );
    }

    return setInputs;
  };

  return (
    <div className="container mt-4">
      <h2>Weekly Workout Program</h2>
      <form onSubmit={handleWorkoutSubmit}>
        <div className="mb-3">
          <label htmlFor="daySelect" className="form-label">
            Select a Day:
          </label>
          <select
            className="form-select"
            id="daySelect"
            value={selectedDay}
            onChange={handleDayChange}
          >
            <option value="">-- Select Day --</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="workoutNameInput" className="form-label">
            Workout Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="workoutNameInput"
            value={workoutName}
            onChange={handleWorkoutNameChange}
          />
        </div>
        {selectedDay && (
          <div>
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
            {renderSetInputs()}
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handleSaveWorkout}
            >
              Save Workout
            </button>
          </div>
        )}
      </form>
      {workoutProgram.length > 0 && (
        <div className="mt-4">
          <h4>Weekly Workout Program</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Day</th>
                <th>Workout Name</th>
                <th>Workout</th>
                <th>Sets</th>
                <th>Weights</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {workoutProgram.map((day, index) => (
                <tr key={index}>
                  <td>{day.day}</td>
                  <td>
                    {day.workouts.map((workout, workoutIndex) => (
                      <div key={workoutIndex}>{workout.name}</div>
                    ))}
                  </td>
                  <td>
                    {day.workouts.map((workout, workoutIndex) => (
                      <div key={workoutIndex}>{workout.workout}</div>
                    ))}
                  </td>
                  <td>
                    {day.workouts.map((workout, workoutIndex) => (
                      <div key={workoutIndex}>{workout.sets}</div>
                    ))}
                  </td>
                  <td>
                    {day.workouts.map((workout, workoutIndex) => (
                      <div key={workoutIndex}>{workout.weights.join(', ')}</div>
                    ))}
                  </td>
                  <td>
                    {day.workouts.map((workout, workoutIndex) => (
                      <div key={workoutIndex}>{workout.reps.join(', ')}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default WeeklyWorkoutProgram;
