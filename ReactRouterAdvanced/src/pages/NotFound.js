export default function NotFound(props) {
  const message = props.message || "404 Page not found";
  return (
    <>
      <div className="centered">
        <h5>{message}</h5>
      </div>
      <div className="centered">
        <h1>(╯°□°）╯︵ ┻━┻</h1>
      </div>
    </>
  );
}
