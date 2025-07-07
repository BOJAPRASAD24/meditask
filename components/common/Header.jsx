"use client";
import Header from '../common/Header';
import {auth} from'@/firebase';

  return (

    <header className="bg-gray-100 border-b border-gray-300 p-4">

      <h1 className="text-xl font-bold mb-2"> MedTrack</h1>
      <div className="flex gap-4 text-blue-700 font-medium">

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/auth">Login</Link>
        
      </div>
    </header>
  );

export default Header;

