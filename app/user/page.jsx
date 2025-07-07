"use client";
import { useEffect, useState } from 'react';
import { saveUser, fetchUsers } from '@/lib/api';

export default function UserPage() {
  const [form, setForm] = useState({ name: '', role: '', email: '' });
  const [users, setUsers] = useState([]);

  useEffect(() => { fetchUsers().then(setUsers); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveUser(form);
    setForm({ name: '', role: '', email: '' });
    const updatedUsers = await fetchUsers();
    setUsers(updatedUsers);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
          <h2 className="text-xl font-bold">Add User</h2>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" />
          <input name="role" value={form.role} onChange={handleChange} placeholder="Role" className="input" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="input" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
        </form>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Users</h3>
          <ul className="space-y-2">
            {users.map((u) => (
              <li key={u.id} className="bg-white p-4 rounded shadow">
                <p><strong>Name:</strong> {u.name}</p>
                <p><strong>Role:</strong> {u.role}</p>
                <p><strong>Email:</strong> {u.email}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
