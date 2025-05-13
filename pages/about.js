export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative px-4 mb-16">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            About Contaboo
          </h1>
          <p className="text-xl text-cyber-blue">
            Where innovation meets simplicity in server automation
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          {[
            {
              title: "Our Mission",
              content: `We are a forward-thinking company dedicated to helping individuals, businesses, and IT professionals take control of their infrastructure with ease. Our mission is to eliminate complexity from server management by providing a powerful library of expert-crafted shell scripts that can run on any environment—whether it's AWS, Google Cloud, Microsoft Azure, or on-premise servers.`
            },
            {
              title: "24/7 Reliability",
              content: `At E-GAR, we understand the importance of uptime, security, and efficiency. That's why every solution we offer is designed to run 24/7—fully automated, fully reliable. With just a single command, our scripts execute your required tasks exactly as defined, whether it's system updates, backups, service monitoring, deployment, or scaling. Think of it as having a full DevOps team in one command line.`
            },
            {
              title: "Our Philosophy",
              content: `Our philosophy is simple: run the script, and the job is done—safely, consistently, and without the need for constant human intervention. We've built these tools not just for convenience, but to help you scale faster, reduce costs, and sleep better knowing your systems are always working in the background.`
            },
            {
              title: "Who We Serve",
              content: `Whether you're a startup founder, a seasoned sysadmin, or an enterprise team, E-GAR gives you the confidence to automate with precision and focus on what really matters—growing your business.`
            }
          ].map((section, i) => (
            <div 
              key={i} 
              className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-xl p-8 backdrop-blur-sm hover:border-cyber-blue/40 transition-colors"
            >
              <h2 className="text-2xl font-bold text-cyber-blue mb-4 flex items-center">
                <span className="cyber-text-glow">{section.title}</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* Closing Statement */}
          <div className="text-center py-12">
            <p className="text-2xl font-bold text-gradient cyber-text-glow">
              Contaboo – Automation That Works While You Sleep
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
