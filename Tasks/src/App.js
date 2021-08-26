import { useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const firebaseUrl =
    "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(firebaseUrl + "/tasks.json");

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} firebaseUrl={firebaseUrl} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default App;
