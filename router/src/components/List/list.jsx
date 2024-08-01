import { useEffect, useState } from 'react';
import './list.css';

const List = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '' });
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const saveToLocalStorage = (updatedUsers) => {
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const addUser = () => {
    if (newUser.username && newUser.email) {
      const updatedUsers = [...users, newUser];
      saveToLocalStorage(updatedUsers);
      setNewUser({ username: '', email: '' });
    }
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    saveToLocalStorage(updatedUsers);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setNewUser(users[index]);
  };

  const saveEdit = () => {
    if (editingIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      saveToLocalStorage(updatedUsers);
      setEditingIndex(-1);
      setNewUser({ username: '', email: '' });
    }
  };

  return (
    <div className="container">
      <h1>User List</h1>
      
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        {editingIndex === -1 ? (
          <button onClick={addUser} className="btn btn-add">Add User</button>
        ) : (
          <button onClick={saveEdit} className="btn btn-save">Save Edit</button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button 
                  onClick={() => startEditing(index)} 
                  className="btn btn-edit"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteUser(index)} 
                  className="btn btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;