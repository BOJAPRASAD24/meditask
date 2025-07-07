'use client';
import { useEffect, useState } from 'react';
import { saveReview, fetchReviews } from '@/lib/api';

export default function ReviewPage() {
  const [form, setForm] = useState({ doctor_id: '', comment: '' });
  const [reviews, setReviews] = useState([]);

  useEffect(() => { fetchReviews().then(setReviews); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveReview(form);
    setForm({ doctor_id: '', comment: '' });
    const updated = await fetchReviews();
    setReviews(updated);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
          <h2 className="text-xl font-bold">Submit Doctor Review</h2>
          <input
            name="doctor_id"
            value={form.doctor_id}
            onChange={handleChange}
            placeholder="Doctor ID"
            className="input"
          />
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Good Treatment"
            className="input h-24"
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Submit Review
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Reviews</h3>
          <ul className="space-y-2">
            {reviews.map((r) => (
              <li key={r.id} className="bg-white p-4 rounded shadow">
                <p><strong>Doctor ID:</strong> {r.doctor_id}</p>
                <p><strong>Review:</strong> {r.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}