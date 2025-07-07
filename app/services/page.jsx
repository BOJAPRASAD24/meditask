import Link from 'next/link'
import React from 'react' 

const page = () => {

  return (

    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700">Our Services</h1>
      <ul className="mt-4 space-y-2 text-base leading-relaxed text-gray-700 list-disc list-inside">

        <li> Health record tracking</li>
        <li> Prescription management</li>
        <li> Appointment scheduling</li>
        <li> Medical web development</li>
        
      </ul>
    </main>
  );
}

export default page