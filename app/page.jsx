"use client";
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  return (
    <>
    <Navbar />
    <main style={{minHeight: '100vh', background: '#0f172a'}}>      
      <section id="hero" style={{padding: '8rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>        <div style={{maxWidth: '1200px'}}>          <h1 style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2A7AE4', textShadow: '0 0 30px rgba(99, 102, 241, 0.3)'}}>            Global Research Hub
          </h1>
          <p style={{fontSize: '1.3rem', color: '#cbd5e1', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem'}}>Professional solutions for modern businesses</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{padding: '1rem 2.5rem', background: '#2A7AE4', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', transition: 'all 0.3s', boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'}}>Get Started</button>
        </div>
      </section>
      
      <section id="about" style={{padding: '6rem 2rem', background: '#1e293b'}}>        <div style={{maxWidth: '1200px', margin: '0 auto'}}>          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#2A7AE4'}}>About Us</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>            <div style={{padding: '2rem', background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', transition: 'all 0.3s'}}>              <h3 style={{color: '#2A7AE4', fontSize: '1.5rem', marginBottom: '1rem'}}>Research Insights</h3>
              <p style={{color: '#cbd5e1', lineHeight: '1.6'}}>The Best Practices 2024 EXPO & Conference is a major North American event for on-site utilities, with registration open for October 29-31, 2024. Fourwaves offers tools for organizing research conferen</p>
            </div>
            <div style={{padding: '2rem', background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', transition: 'all 0.3s'}}>              <img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800" alt="About" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
              <h3 style={{color: '#F4A261', fontSize: '1.5rem'}}>Our Vision</h3>
              <p style={{color: '#cbd5e1'}}>Leading innovation in the industry</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="services" style={{padding: '6rem 2rem', background: '#0f172a'}}>        <div style={{maxWidth: '1200px', margin: '0 auto'}}>          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#2A7AE4'}}>Our Services</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>            <div style={{padding: '2rem', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', transition: 'all 0.3s'}}>              <h3 style={{color: '#2A7AE4', fontSize: '1.5rem', marginBottom: '1rem'}}>Premium Service</h3>
              <p style={{color: '#cbd5e1'}}>High-quality solutions tailored to your needs</p>
            </div>
            <div style={{padding: '2rem', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', transition: 'all 0.3s'}}>              <h3 style={{color: '#2A7AE4', fontSize: '1.5rem', marginBottom: '1rem'}}>Consulting</h3>
              <p style={{color: '#cbd5e1'}}>Expert guidance for your business</p>
            </div>
            <div style={{padding: '2rem', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', transition: 'all 0.3s'}}>              <h3 style={{color: '#2A7AE4', fontSize: '1.5rem', marginBottom: '1rem'}}>Support</h3>
              <p style={{color: '#cbd5e1'}}>24/7 dedicated customer support</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="features" style={{padding: '6rem 2rem', background: '#1e293b'}}>        <div style={{maxWidth: '1200px', margin: '0 auto'}}>          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#2A7AE4'}}>Key Features</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>            <div style={{textAlign: 'center', padding: '2rem'}}>              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{color: '#2A7AE4', marginBottom: '0.5rem'}}>Fast</h3>
              <p style={{color: '#cbd5e1'}}>Lightning-fast performance</p>
            </div>
            <div style={{textAlign: 'center', padding: '2rem'}}>              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔒</div>
              <h3 style={{color: '#2A7AE4', marginBottom: '0.5rem'}}>Secure</h3>
              <p style={{color: '#cbd5e1'}}>Bank-level security</p>
            </div>
            <div style={{textAlign: 'center', padding: '2rem'}}>              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📱</div>
              <h3 style={{color: '#2A7AE4', marginBottom: '0.5rem'}}>Responsive</h3>
              <p style={{color: '#cbd5e1'}}>Works on all devices</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" style={{padding: '6rem 2rem', background: '#0f172a'}}>        <div style={{maxWidth: '800px', margin: '0 auto'}}>          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: '#2A7AE4'}}>Contact Us</h2>
          <form style={{background: '#1e293b', padding: '3rem', borderRadius: '12px', border: '1px solid #334155'}}>            <div style={{marginBottom: '1.5rem'}}>              <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Name</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
            </div>
            <div style={{marginBottom: '1.5rem'}}>              <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Email</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}} />
            </div>
            <div style={{marginBottom: '1.5rem'}}>              <label style={{display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontWeight: 'bold'}}>Message</label>
              <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="5" style={{width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#e2e8f0', fontSize: '1rem'}}></textarea>
            </div>
            <button type="submit" style={{width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', border: 'none', background: '#2A7AE4', color: 'white', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'}}>Send Message</button>
          </form>
        </div>
      </section>
      
      <footer style={{padding: '3rem 2rem', textAlign: 'center', background: '#1e293b', borderTop: '1px solid #334155'}}>        <p style={{color: '#94a3b8'}}>© 2024 Global Research Hub. All rights reserved.</p>
      </footer>
    </main>
    </>
  );
}