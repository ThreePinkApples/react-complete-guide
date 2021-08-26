import { useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-https";

function App() {
  const [tasks, setTasks] = useState([]);
  const firebaseUrl =
    "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";
  const databaseUrl = firebaseUrl + "/tasks.json";
  const { isLoading, error, sendRequest } = useHttp(
    {
      url: databaseUrl,
    },
    (responseData) => {
      const loadedTasks = [];

      for (const taskKey in responseData) {
        loadedTasks.push({ id: taskKey, text: responseData[taskKey].text });
      }

      setTasks(loadedTasks);
    }
  );

  const fetchTasks = async () => {
    sendRequest();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={addTask} firebaseUrl={databaseUrl} />
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
