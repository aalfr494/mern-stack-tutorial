import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    })
    try {
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    } catch (error) {
        console.log('Error on handleClick function ', error)
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load: {workout.load}</strong>
      </p>
      <p>
        <strong>Reps: {workout.reps}</strong>
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
