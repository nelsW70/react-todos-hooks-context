import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { TodosContext } from './contexts/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  console.log('edit form render');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '100%', display: 'flex' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      ></TextField>
      <IconButton aria-label="Cancel" onClick={toggleEditForm}>
        <CancelIcon />
      </IconButton>
    </form>
  );
}

export default EditTodoForm;
