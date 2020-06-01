import React, { Fragment } from 'react';
import Input from './components/Input';


function App() {
  return (
     <Fragment>
       <h1 className="text-center">Enter Todo</h1>
       <div className="container">
          <Input />
       </div>
     </Fragment>
  );
}

export default App;
