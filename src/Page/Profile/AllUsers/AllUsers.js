import React, { useEffect, useState } from 'react';
import { FaTrash, FaUserShield } from "react-icons/fa";
import './AllUsers.css';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Error fetching users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (user) => {
    try {
      // Use fetch with DELETE method to delete the user
      const response = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting user');
      }

      // Update the users state after deletion
      setUsers((prevUsers) => prevUsers.filter((u) => u._id !== user._id));
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleMakeAdmin = async (user) => {
    try {
      // Use fetch with PATCH method to update the user's role to 'admin'
      const response = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'admin',
        }),
      });

      if (!response.ok) {
        throw new Error('Error updating user role');
      }

      // Update the users state after making the user an admin
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u._id === user._id ? { ...u, role: 'admin' } : u
        )
      );
    } catch (error) {
      console.error('Error updating user role:', error.message);
    }
  };

  return (
    <div className='w-full'>
      <h1 className='text-2xl mt-5' style={{ fontFamily: 'sans-serif', color: 'black' }}>Total Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className='text-lg' style={{ fontFamily: 'sans-serif', color: 'black' }}>{index + 1}</td>
                <td className='text-lg' style={{ fontFamily: 'sans-serif', color: 'black' }}>{user.name}</td>
                <td className='text-lg' style={{ fontFamily: 'sans-serif', color: 'black' }}>{user.email}</td>

                <td>
                  {user.role === 'admin' ? (
                    'admin'
                  ) : (
                    <button
                      onClick={(event) => handleMakeAdmin(user, event)} id='makebtn'
                      className='btn btn-ghost bg-teal-300 text-black'
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button id='delbtn'
                    onClick={() => handleDelete(user)}
                    className='btn btn-ghost bg-red-600 text-black'
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
