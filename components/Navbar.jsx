"use client";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav style={{position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(99, 102, 241, 0.3)', padding: '1rem 2rem'}}>      <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>        <button onClick={() => scrollTo('hero')} style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#2A7AE4', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.3s'}}>          Global Research Hub
        </button>
        <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>          <button onClick={() => scrollTo('hero')} style={{color: '#e2e8f0', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.3s'}}>Home</button>
          <button onClick={() => scrollTo('about')} style={{color: '#e2e8f0', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.3s'}}>About</button>
          <button onClick={() => scrollTo('services')} style={{color: '#e2e8f0', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.3s'}}>Services</button>
          <button onClick={() => scrollTo('features')} style={{color: '#e2e8f0', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.3s'}}>Features</button>
          <button onClick={() => scrollTo('contact')} style={{color: '#e2e8f0', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.3s'}}>Contact</button>
          <button style={{padding: '0.5rem 1.5rem', background: '#2A7AE4', borderRadius: '6px', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s', boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'}}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}