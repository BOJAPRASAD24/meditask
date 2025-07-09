'use client';

import { useEffect, useState } from 'react';
import { fetchUser } from '@/lib/api';
import withAuth from '@/hoc/withAuth';

function UserPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await fetchUser();
      setUser(data);
    };
    loadUser();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        {user ? (
          <div className="space-y-2">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </main>
  );
}

export default withAuth(UserPage); 
