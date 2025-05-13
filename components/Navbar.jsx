import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-cyber-blue font-bold text-xl md:text-2xl relative group">
            <span className="relative z-10">Contaboo</span>
            <div className="absolute -inset-1 bg-cyber-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Mobile menu button - Improved touch target */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-cyber-blue hover:text-cyber-purple transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-cyber-blue rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Our Mission', '/mission'],
              ['Contact Us', '/contact']
            ].map(([title, url]) => (
              <Link 
                key={title} 
                href={url} 
                className="relative group text-gray-300 hover:text-cyber-blue transition-colors duration-300"
              >
                <span>{title}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Improved accessibility and animation */}
        <div 
          className={`
            md:hidden 
            fixed inset-0 
            bg-cyber-dark/95 backdrop-blur-lg
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            z-40
          `}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Our Mission', '/mission'],
              ['Contact Us', '/contact']
            ].map(([title, url]) => (
              <Link 
                key={title} 
                href={url} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl sm:text-2xl text-gray-300 hover:text-cyber-blue transition-colors duration-300 py-2"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
