'use client';
import { useEffect, useState } from 'react';
import { saveDoctor, fetchDoctors } from '@/lib/api';

export default function DoctorPage() {
  const [form, setForm] = useState({ name: '', speciality: '', availability: '' });
  const [doctors, setDoctors] = useState([]);

  useEffect(() => { fetchDoctors().then(setDoctors); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveDoctor(form);
    setForm({ name , speciality , availability});
    const updatedDoctors = await fetchDoctors();
    setDoctors(updatedDoctors);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
          <h2 className="text-xl font-bold">Add Doctor</h2>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" />
          <input name="speciality" value={form.speciality} onChange={handleChange} placeholder="Speciality" className="input" />
          <input name="availability" value={form.availability} onChange={handleChange} placeholder="Availability (e.g. Mon-Fri 9-5)" className="input" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
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
