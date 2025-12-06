import Navbar from '../../components/Navbar';

export default function Services() {
  return (
    <>
    <Navbar />
    <main style={{minHeight: '100vh', background: '#0f172a', padding: '4rem 2rem'}}>      <div style={{maxWidth: '1200px', margin: '0 auto'}}>        <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem', color: '#2A7AE4', textAlign: 'center'}}>Our Services</h1>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>          <div style={{padding: '2rem', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', transition: 'all 0.3s'}}>            <h3 style={{color: '#2A7AE4', fontSize: '1.5rem', marginBottom: '1rem'}}>Premium Service</h3>
            <p style={{color: '#cbd5e1'}}>High-quality solutions tailored to your needs.</p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}