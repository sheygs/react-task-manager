import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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


Todo.propTypes = {
 id: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 onDelete: PropTypes.func.isRequired
};

export default Todo;