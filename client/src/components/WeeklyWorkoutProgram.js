import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./WeeklyWorkoutProgram.css";

function WeeklyWorkoutProgram() {
  const [selectedDay, setSelectedDay] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  const [workout, setWorkout] = useState("");
  const [sets, setSets] = useState("");
  const [weights, setWeights] = useState([]);
  const [reps, setReps] = useState([]);
  const [weightRepMap, setWeightRepMap] = useState([]);
  const [workoutProgram, setWorkoutProgram] = useState([]);

  useEffect(() => {
    // Load the workout program from local storage on component mount
    const savedProgram = localStorage.getItem("weeklyWorkoutProgram");
    if (savedProgram) {
      setWorkoutProgram(JSON.parse(savedProgram));
    }
  }, []);

  useEffect(() => {
    // Save the workout program to local storage whenever it changes
    localStorage.setItem(
      "weeklyWorkoutProgram",
      JSON.stringify(workoutProgram)
    );
  }, [workoutProgram]);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleWorkoutChange = (event) => {
    setWorkout(event.target.value);
  };

  const handleSetsChange = (event) => {
    if (event.target.value > 5) {
      alert("You can not have more that 5 sets of a workout");
    } else {
      setSets(event.target.value);
      setWeights([]);
      setReps([]);
    }
  };

  const handleWeightChange = (event, index) => {
    const newWeights = [...weights];
    newWeights[index] = event.target.value;
    setWeights(newWeights);

    const newWeightRepMap = [...weightRepMap];
    if (newWeightRepMap[index]) {
      newWeightRepMap[index]["weight"] = event.target.value;
    } else {
      newWeightRepMap[index] = { weight: event.target.value };
    }
    setWeightRepMap(newWeightRepMap);
  };

  const handleRepsChange = (event, index) => {
    const newReps = [...reps];
    newReps[index] = event.target.value;
    setReps(newReps);

    const newWeightRepMap = [...weightRepMap];
    if (newWeightRepMap[index]) {
      newWeightRepMap[index]["rep"] = event.target.value;
    } else {
      newWeightRepMap[index] = { weight: event.target.value };
    }
    setWeightRepMap(newWeightRepMap);
  };

  const handleAddWorkout = () => {
    if (
      selectedDay &&
      workout &&
      sets &&
      weights.length > 0 &&
      reps.length > 0
    ) {
      setWorkoutProgram((prevProgram) => {
        const updatedProgram = [...prevProgram];
        const existingDay = updatedProgram.find(
          (day) => day.day === selectedDay
        );

        if (existingDay) {
          const isExistingRecord = existingDay.workouts.some(
            (x) =>
              x.workout === workout &&
              x.sets === sets &&
              x.weights === weights &&
              x.reps === reps
          );
          if (!isExistingRecord) {
            existingDay.workouts.push({
              workout,
              sets,
              weights,
              reps,
              weightRepMap,
            });
          }
        } else {
          updatedProgram.push({
            day: selectedDay,
            workouts: [
              {
                workout,
                sets,
                weights,
                reps,
                weightRepMap,
              },
            ],
          });
        }

        return updatedProgram;
      });

      setWorkout("");
      setSets("");
      setWeights([]);
      setReps([]);
    }
  };

  const handleSaveWorkout = () => {
    if (workoutName && workoutProgram.length > 0) {
      localStorage.setItem(workoutName, JSON.stringify(workoutProgram));

      // Clear the form fields and workout program after saving
      setWorkoutName("");
      setWorkoutProgram([]);
    }
  };

  const renderSetInputs = () => {
    const setInputs = [];

    for (let i = 0; i < sets; i++) {
      setInputs.push(
        <div key={i} className="rep-set-card mt-5">
          <div className="setLabel">Set {i + 1}</div>
          <div className="mb-2">
            <label htmlFor={`weightInput${i}`} className="form-label">
              Weight (lbs):
            </label>
            <input
              type="number"
              className="form-control"
              id={`weightInput${i}`}
              value={weights[i] || ""}
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
              value={reps[i] || ""}
              onChange={(e) => handleRepsChange(e, i)}
            />
          </div>
        </div>
      );
    }

    return setInputs;
  };

  return (
    <div className="workout-container">
      <div className="wk-container">
        <div>
          <h2>Weekly Workout Program</h2>
          <form>
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
                    autoComplete="off"
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
                    autoComplete="off"
                    value={sets}
                    onChange={handleSetsChange}
                  />
                </div>
                {renderSetInputs()}
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={handleAddWorkout}
                >
                  Add Workout
                </button>
              </div>
            )}
          </form>
        </div>
        {workoutProgram.length > 0 && (
          <div className="mt-4">
            <table className="wk-table table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Workout</th>
                  <th>Sets</th>
                  <th>Weights</th>
                  <th>Reps</th>
                </tr>
              </thead>
              <tbody>
                {workoutProgram.map((day, index) => (
                  <React.Fragment key={index}>
                    {day.workouts.map((workout, workoutIndex) => (
                      <tr key={`${index}-${workoutIndex}`}>
                        {workoutIndex === 0 ? (
                          <td rowSpan={day.workouts.length}>{day.day}</td>
                        ) : null}
                        <td>{workout.workout}</td>
                        <td>{workout.sets}</td>
                        <td>
                          {workout.weights.map((weight, weightIndex) => (
                            <React.Fragment key={weightIndex}>
                              {weight}
                              <br />
                            </React.Fragment>
                          ))}
                        </td>
                        <td>
                          {workout.reps.map((rep, repIndex) => (
                            <React.Fragment key={repIndex}>
                              {rep}
                              <br />
                            </React.Fragment>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            {/* <table className="wk-table table">
              <thead>
                <tr>
                  <th>Day</th>
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
                        <div key={workoutIndex}>
                          {workout.weights.map((weight, weightIndex) => (
                            <React.Fragment key={weightIndex}>
                              {weight}
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </td>
                    <td>
                      {day.workouts.map((workout, workoutIndex) => (
                        <div key={workoutIndex}>
                          {workout.reps.map((rep, repIndex) => (
                            <React.Fragment key={repIndex}>
                              {rep}
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <div className="mb-3">
              <label htmlFor="workoutNameInput" className="form-label">
                Workout Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="workoutNameInput"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handleSaveWorkout}
            >
              Save Workout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeeklyWorkoutProgram;
