import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Wait for video to be loaded
          await videoRef.current.load();
          // Try to play the video
          await videoRef.current.play();
          setIsReady(true);
        }
      } catch (error) {
        console.error("Video autoplay failed:", error);
        // Set ready state even if autoplay fails
        setIsReady(true);
      }
    };

    playVideo();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 via-cyber-dark/50 to-cyber-dark/90 z-10"></div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          >
            <source src="/contaboo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center pt-16 md:pt-24">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyber-blue via-white to-cyber-purple bg-clip-text text-transparent mb-6 md:mb-8 leading-tight">
              Contaboo - Next-Gen Server Management
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
              Powerful shell scripts for managing your cloud infrastructure
            </p>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-cyber-blue hover:bg-cyber-purple text-cyber-dark font-bold rounded-lg transform transition-all hover:scale-105 hover:shadow-glow">
              Get Started
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce w-6 h-6 border-r-2 border-b-2 border-cyber-blue rotate-45 opacity-75"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: '🌩️',
              title: 'AWS Management',
              desc: 'Automated scripts for AWS infrastructure',
              href: '/aws',
            },
            {
              icon: '☁️',
              title: 'Azure Solutions',
              desc: 'Streamlined management for Azure services',
            },
            {
              icon: '🚀',
              title: 'GCP Automation',
              desc: 'Efficient Google Cloud automation',
            },
          ].map((feature, i) => (
            <div
              key={i}
              onClick={() => feature.href && window.location.assign(feature.href)}
              className="p-6 rounded-xl border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all bg-cyber-dark/50 backdrop-blur-sm cursor-pointer"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-cyber-blue mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
