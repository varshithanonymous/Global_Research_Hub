"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  
  return (
    <>
    <Navbar />
    <main style={{minHeight: '100vh', background: '#0f172a', padding: '4rem 2rem'}}>      <div style={{maxWidth: '800px', margin: '0 auto'}}>        <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', color: '#2A7AE4', textAlign: 'center'}}>Contact Us</h1>
        <form style={{background: '#1e293b', padding: '3rem', borderRadius: '12px', border: '1px solid #334155'}}>          <div style={{marginBottom: '1.5rem'}}>            <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Name</label>
            <input type="text" required style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
          </div>
          <div style={{marginBottom: '1.5rem'}}>            <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Email</label>
            <input type="email" required style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
          </div>
          <div style={{marginBottom: '1.5rem'}}>            <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Message</label>
            <textarea required rows="5" style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}}></textarea>
          </div>
          <button type="submit" style={{width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', border: 'none', background: '#2A7AE4', color: 'white', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'}}>Send Message</button>
        </form>
      </div>
    </main>
    </>
  );
}