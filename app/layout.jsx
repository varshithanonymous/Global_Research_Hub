import './globals.css';

export const metadata = {
  title: 'Global Research Hub',
  description: 'Discover global research insights and stay updated with international conferences in one platform. Empower your research journey today.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0, padding: 0, background: '#0f172a', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}