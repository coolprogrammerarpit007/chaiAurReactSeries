import Chai from "./Chai";
import Pos from "./Pos";

function App() {

  const name = "Arpit Mishra";
  return (
    <>
      <h1>React Fundamentals</h1>
      <Chai/>
      <p>React Frontend development.</p>
      <Pos/>
      <p>My name is: {name}</p>
    </>
  );
}

export default App
