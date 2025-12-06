"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', interests: '' });
  
  return (
    <>
    <Navbar />
    <main style={{minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'}}>      <div style={{maxWidth: '450px', width: '100%', background: '#1e293b', padding: '3rem', borderRadius: '12px', border: '1px solid #334155'}}>        <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#F4A261'}}>Sign Up</h1>
        <form>
          <div style={{marginBottom: '1.5rem'}}>            <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Name</label>
            <input type="text" required style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
          </div>
          <div style={{marginBottom: '1.5rem'}}>            <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Email</label>
            <input type="email" required style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
          </div>
          <div style={{marginBottom: '1.5rem'}}>            <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Password</label>
            <input type="password" required style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
          </div>
          <div style={{marginBottom: '1.5rem'}}>            <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Interests</label>
            <input type="text" placeholder="What interests you?" style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
          </div>
          <button type="submit" style={{width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', border: 'none', background: '#F4A261', color: 'white', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)', marginTop: '1rem'}}>Create Account</button>
        </form>
        <p style={{textAlign: 'center', marginTop: '2rem', color: '#94a3b8'}}>Already have an account? <Link href="/login" style={{color: '#F4A261', textDecoration: 'none', fontWeight: 'bold'}}>Login</Link></p>
      </div>
    </main>
    </>
  );
}