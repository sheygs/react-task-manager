import React, { Fragment } from 'react';
import Input from './components/Input';
import Todos from './components/Todos';


function App() {
  return (
     <Fragment>
       <h1 className="text-center">Enter Todo</h1>
       <div className="container">
          <Input />
          <Todos/>
       </div>
     </Fragment>
  );
}

export default App;
