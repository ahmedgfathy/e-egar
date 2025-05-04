export default function AWS() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            AWS + Shell Scripting
          </h1>
          <p className="text-xl text-cyber-blue">
            The Smart Way to Save Money and Stay Online 24/7
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">Why AWS?</h2>
            <p className="text-gray-300 mb-6">
              Amazon Web Services (AWS) is not just the biggest name in cloud computing—it's also the most flexible.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Auto-Scaling EC2",
                "Elastic Load Balancer (ELB)",
                "RDS & S3 for High Availability",
                "CloudFront CDN",
                "Lightsail for Budget-Friendly Hosting"
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <span className="text-cyber-blue">✅</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shell Scripting Section */}
          <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">
              🖥️ Shell Scripting: The Power Behind the Scenes
            </h2>
            <p className="text-gray-300 mb-6">
              Our team writes custom bash scripts to automate the tasks most sysadmins do manually.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "🔁 Daily & Weekly Backups",
                  items: [
                    "Automatic file system and database backups to S3",
                    "Retention policies to clean old backups",
                    "Email alerts on success/failure"
                  ]
                },
                {
                  title: "🛠️ Server Health Checks & Auto-Restart",
                  items: [
                    "Monitor services like Apache/Nginx, MySQL, and Docker",
                    "Auto-restart if a service goes down",
                    "Log reporting via email or Slack"
                  ]
                },
                // Add other sections similarly
              ].map((section, i) => (
                <div key={i} className="bg-cyber-dark/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-cyber-blue mb-3">{section.title}</h3>
                  <ul className="list-none space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-2">
                        <span className="text-cyber-purple">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
