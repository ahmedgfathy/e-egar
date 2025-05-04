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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-cyber-blue font-bold text-2xl relative group">
            <span className="relative z-10">EGAR</span>
            <div className="absolute -inset-1 bg-cyber-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyber-blue hover:text-cyber-purple transition-colors z-50"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
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

        {/* Mobile Navigation */}
        <div className={`
          md:hidden 
          fixed inset-0 
          bg-cyber-dark/95 backdrop-blur-lg
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          z-40
        `}>
          <div className="flex flex-col items-center justify-center h-screen space-y-8 pt-20">
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
                className="text-2xl text-gray-300 hover:text-cyber-blue transition-colors duration-300"
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
