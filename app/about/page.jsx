"use client";
import { House } from  'lucide-react'
import Link from 'next/link'
import React from 'react'

 const page =() => {
  return (

    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700">About MedTrack</h1>
      <p className="mt-4 text-base leading-relaxed text-gray-700">
    
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-700">
    
      </p>
    </main>
  );
}

export default withAuth (page);