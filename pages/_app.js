import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
