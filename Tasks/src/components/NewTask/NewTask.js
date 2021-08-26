import useHttp from "../../hooks/use-https";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const firebaseUrl = props.firebaseUrl;
  const { isLoading, error, sendRequest } = useHttp(
    {
      url: firebaseUrl,
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
    (responseData, requestBody) => {
      const generatedId = responseData.name; // firebase-specific => "name" contains generated id
      console.log(responseData);
      const createdTask = { id: generatedId, text: requestBody.text };

      props.onAddTask(createdTask);
    }
  );

  function addNewTask(taskText) {
    sendRequest({ text: taskText });
  }

  return (
    <Section>
      <TaskForm onEnterTask={addNewTask} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
