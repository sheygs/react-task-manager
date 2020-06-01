import React, { Fragment } from 'react';

const Todo = ({ id, title, onDelete }) => {
   return (
      <Fragment>
          <tr>
             <th scope="row">{id}</th>
             <td>{title}</td>
             <td>
                <button 
                type="button"
                className="btn btn-warning">
                  Edit
                </button>
             </td>
             <td>
             <button
                 onClick={() => onDelete(id)} 
                 type="button" 
                 className="btn btn-danger">
                 Delete
            </button>
             </td>
          </tr>
      </Fragment>
   )
};

export default Todo;