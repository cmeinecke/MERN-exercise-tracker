import { useEffect } from "react";
import { useExercisesContext } from "../hooks/useExercisesContext";

// components
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseForm from "../components/ExerciseForm";

const Home = () => {
  const { exercises, dispatch } = useExercisesContext();

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("/api/exercises");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EXERCISES", payload: json });
      }
    };

    fetchExercises();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="exercises">
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseDetails exercise={exercise} key={exercise._id} />
          ))}
      </div>
      <ExerciseForm />
    </div>
  );
};

export default Home;
