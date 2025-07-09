'use client';

import { useEffect, useState } from 'react';
import { fetchWithAuth, postWithAuth } from '@/lib/api';
import withAuth from '@/hoc/withAuth';

function DoctorPage() {
  const [form, setForm] = useState({ name: '', speciality: '', availability: '' });
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchWithAuth('http://localhost:8000/api/doctors/');
      setDoctors(data);
    };
    loadDoctors();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postWithAuth('http://localhost:8000/api/doctors/', form);
    setForm({ name: '', speciality: '', availability: '' });

    const updated = await fetchWithAuth('http://localhost:8000/api/doctors/');
    setDoctors(updated);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
          <h2 className="text-xl font-bold">Add Doctor</h2>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="input w-full p-2 border rounded"
          />
          <input
            name="speciality"
            value={form.speciality}
            onChange={handleChange}
            placeholder="Speciality"
            className="input w-full p-2 border rounded"
          />
          <input
            name="availability"
            value={form.availability}
            onChange={handleChange}
            placeholder="Availability (Mon-Fri 9-5)"
            className="input w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Doctors</h3>
          <ul className="space-y-2">
            {doctors.map((doc) => (
              <li key={doc.id} className="bg-white p-4 rounded shadow">
                <p><strong>Name:</strong> {doc.name}</p>
                <p><strong>Speciality:</strong> {doc.speciality}</p>
                <p><strong>Availability:</strong> {doc.availability}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}


export default withAuth(doctorpage);

