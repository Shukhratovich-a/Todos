import Todos from "./Components/Todos/Todos";

import "./App.scss";

function App() {
  return (
    <>
      <h1 className="todos__heading">todos</h1>
      <Todos hasTodo={true} />
    </>
  );
}

export default App;
