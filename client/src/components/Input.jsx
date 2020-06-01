import React, { Fragment, useState } from 'react';

 const Input = () => {
   const [title, setTitle ] = useState('');
   
   const handleSubmit = async e => {
     e.preventDefault();
     try {
        const body = {title};

        const response = await fetch("http://localhost:5000/api/v1/todos", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body)
       });

       console.log(response);  

     } catch ({ message }) {
       console.error(message);
     }
     setTitle('');
   }

   const handleChange = e => {
      setTitle(e.target.value);
   }

    return (
      <Fragment>
            <form className="form w-75 mx-auto" onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group d-flex">
                 <label htmlFor="title"></label>
                  <input 
                      id="title" 
                      name="title" 
                      type="text" 
                      className="form-control" 
                      value={title} 
                      onChange={handleChange}
                  />
                  <button className="btn btn-primary px-3 mx-2" type="submit">add</button>
                </div>
            </form>
      </Fragment>   
    )
};

export default Input;