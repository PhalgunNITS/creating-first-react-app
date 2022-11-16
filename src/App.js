import './App.css';
import ClasssComponent from './components/ClasssComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from "react";

function App() {

  const [name, setName] = useState("Phalgun");
  const [age, setAge] = useState(18);

  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClasssComponent />
      <h1>Functional components</h1>
      <FunctionalComponent name={name} age={age} setName={setName} setAge={setAge} />
    </div>
  );
}

export default App;
