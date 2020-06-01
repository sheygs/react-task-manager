import React, { Fragment, useState } from 'react';

const Edit = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
 
  const editTodo = async e => {
     try {
      e.preventDefault();
      const body = {title};
      const editedTodo = await fetch(`http://localhost:5000/api/v1/todos/${todo.id}`, 
      {
         method: "PUT",
         headers: {
          "Content-Type": "application/json"
         },
         body: JSON.stringify(body)
      });
      
      console.log(editedTodo);

     } catch({ message }) {
        console.error(message);
     }
     
  };

   const onEditChange = (e) => {
     setTitle(e.target.value);
   }

  return (
      <Fragment>
            {/* Button trigger modal */}
            <button onClick={() => setTitle(todo.title)} type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id-${todo.id}`}>
              Edit
            </button>

           {/*  Modal  */}
          <div className="modal fade" id={`id-${todo.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Edit</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                         <input className="form-control" type="text" value={title} onChange={onEditChange} />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={editTodo}>Save Changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>               
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
   )
};

export default Edit;