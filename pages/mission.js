export default function Mission() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative px-4 mb-16">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-cyber-blue">
            Empowering DevOps through automation excellence
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          {[
            {
              title: "Vision",
              content: "To revolutionize server management by making enterprise-grade automation accessible to everyone. We envision a world where managing cloud infrastructure is as simple as running a single command."
            },
            {
              title: "Core Values",
              items: [
                "Automation First - We believe in automating everything that can be automated",
                "Security by Design - Security isn't an afterthought, it's built into everything we do",
                "Simplicity - Complex problems deserve simple solutions",
                "Reliability - Our tools work 24/7 so you don't have to"
              ]
            },
            {
              title: "Our Approach",
              content: "At Contaboo, we combine years of DevOps expertise with cutting-edge automation to solve complex infrastructure challenges. Our shell scripts are crafted with precision, tested rigorously, and documented thoroughly to ensure seamless operation in any environment."
            }
          ].map((section, i) => (
            <div 
              key={i}
              className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-xl p-8 backdrop-blur-sm hover:border-cyber-blue/40 transition-colors"
            >
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                <span className="cyber-text-glow">{section.title}</span>
              </h2>
              {section.items ? (
                <ul className="space-y-4 text-gray-300">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start space-x-2">
                      <span className="text-cyber-purple">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
