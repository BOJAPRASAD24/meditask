'use client';
import { useEffect, useState } from 'react';
import { saveAppointment, fetchAppointments } from '@/lib/api';

export default function AppointmentPage() {
  const [form, setForm] = useState({ patient_id: '', doctor_id: '', datetime: '' });
  const [appointments, setAppointments] = useState([]);

  useEffect(() => { fetchAppointments().then(setAppointments); }, []);

  const handleChange = (e) => setForm({ form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveAppointment(form);
    setForm({ patient_id: '', doctor_id: '', datetime: '' });
    const updated = await fetchAppointments();
    setAppointments(updated);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
          <h2 className="text-xl font-bold">Book Appointment</h2>
          <input
            name="patient_id"
            value={form.patient_id}
            onChange={handleChange}
            placeholder="Patient ID"
            className="input"
          />
          <input
            name="doctor_id"
            value={form.doctor_id}
            onChange={handleChange}
            placeholder="Doctor ID"
            className="input"
          />
          <input
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            type="datetime-local"
            className="input"
          />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Schedule
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Appointments</h3>
          <ul className="space-y-2">
            {appointments.map((appt) => (
              <li key={appt.id} className="bg-white p-4 rounded shadow">
                <p><strong>Patient ID:</strong> {appt.patient_id}</p>
                <p><strong>Doctor ID:</strong> {appt.doctor_id}</p>
                <p><strong>Date/Time:</strong> {appt.datetime}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}