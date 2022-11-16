import './App.css';
import ClasssComponent from './pages/ClasssComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';


function App() {

  const [name, setName] = useState("Phalgun");
  const [age, setAge] = useState(18);

  return (
    <Routes>
      <Route path='/' element={<ClasssComponent />} />
      <Route path='/funcational-component' element={<FunctionalComponent name={name} age={age} setName={setName} setAge={setAge} />} />
    </Routes>
  );
}


// {<h1>Class Component</h1>
//       <ClasssComponent />
//       <h1>Functional components</h1>
//       }

export default App;
