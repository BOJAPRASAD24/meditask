 'use client';

import { useEffect, useState } from 'react';
import { fetchAppointments, saveAppointment } from '@/lib/api';
import withAuth from '@/hoc/withAuth';

function AppointmentPage() {
  const [form, setForm] = useState({ doctor_id: '', datetime: '' });
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointments();
      setAppointments(data);
    };
    loadAppointments();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveAppointment(form);
    setForm({ doctor_id: '', datetime: '' });

    const updated = await fetchAppointments();
    setAppointments(updated);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
          <h2 className="text-xl font-bold">Book Appointment</h2>
          <input
            name="doctor_id"
            value={form.doctor_id}
            onChange={handleChange}
            placeholder="Doctor ID"
            className="input w-full p-2 border rounded"
          />
          <input
            type="datetime-local"
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            className="input w-full p-2 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Your Appointments</h3>
          <ul className="space-y-2">
            {appointments.map((appt) => (
              <li key={appt.id} className="bg-white p-4 rounded shadow">
                <p><strong>Doctor:</strong> {appt.doctor.username}</p>
                <p><strong>Time:</strong> {new Date(appt.datetime).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default withAuth(AppointmentPage);

