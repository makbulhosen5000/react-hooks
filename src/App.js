import React from 'react';
import './App.css';
import UseMemo from './components/useMemoHook/UseMemo';

//import ReducerMain from './components/useReducerHook/ReducerMain';
// import ComplexCounter2 from './components/useReducerHook/ComplexCounter2';
// import ComplexCounter from './components/useReducerHook/ComplexCounter';
// import ReducerCounter from './components/useReducerHook/ReducerCounter';
// import UseReducer from './components/useReducerHook/UseReducer';
//import UserForm from './components/useRefHook/UserForm';
// import DataFetch from './components/useEffectHook/customHook/DataFetch';
// import UseEffectExample from './components/useEffectHook/UseEffectExample';


export const counterContext = React.createContext();

function App() {

  return (
    <div className="App">
      {/* UseEffectExample */}
      {/* <DataFetch/> */}
      {/* <UserForm/> */}
      {/* <UseReducer/> */}
      {/* <ReducerCounter/> */}
      {/* <ComplexCounter2/> */}
      {/* <ReducerMain/> */}
      <UseMemo/>
    </div>
  );
}

export default App;
