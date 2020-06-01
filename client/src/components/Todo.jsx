import React, { Fragment } from 'react';
import Edit from './Edit';

const Todo = ({ id, title, onDelete }) => {
   return (
      <Fragment>
          <tr>
             <th scope="row">{id}</th>
             <td>{title}</td>
             <td>
                <Edit todo={{id, title}} />
             </td>
             <td>
             <button
                 onClick={() => onDelete(id)} 
                 type="button" 
                 className="btn btn-danger"
             >
                 Delete
            </button>
             </td>
          </tr>
      </Fragment>
   )
};

export default Todo;