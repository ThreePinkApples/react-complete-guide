import useHttp from "../../hooks/use-https";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const firebaseUrl = props.firebaseUrl;
  const { isLoading, error, sendRequest } = useHttp();

  function addNewTask(taskText) {
    sendRequest(
      {
        url: firebaseUrl,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      (responseData) => {
        const generatedId = responseData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
      }
    );
  }

  return (
    <Section>
      <TaskForm onEnterTask={addNewTask} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
