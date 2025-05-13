export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative px-4 mb-16">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-cyber-blue">
            Let's automate your infrastructure together
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-xl p-8 backdrop-blur-sm">
          <form className="space-y-6">
            {[
              { label: 'Name', type: 'text', placeholder: 'Enter your name' },
              { label: 'Email', type: 'email', placeholder: 'Enter your email' },
              { label: 'Company', type: 'text', placeholder: 'Your company name' },
              { label: 'Message', type: 'textarea', placeholder: 'How can we help you?' }
            ].map((field, i) => (
              <div key={i} className="space-y-2">
                <label className="block text-cyber-blue font-medium">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    className="w-full bg-cyber-dark/70 border border-cyber-blue/30 rounded-lg p-3 text-gray-200 focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition-all"
                    rows="4"
                    placeholder={field.placeholder}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    className="w-full bg-cyber-dark/70 border border-cyber-blue/30 rounded-lg p-3 text-gray-200 focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition-all"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
            
            <button className="w-full px-8 py-4 bg-cyber-blue hover:bg-cyber-purple text-cyber-dark font-bold rounded-lg transform transition-all hover:scale-105 hover:shadow-glow">
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Email Us',
              content: 'support@contaboo.com',
              icon: '📧'
            },
            {
              title: 'Documentation',
              content: 'docs.contaboo.com',
              icon: '📚'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-xl p-6 text-center hover:border-cyber-blue/40 transition-all"
            >
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <h3 className="text-cyber-blue font-bold mb-1">{item.title}</h3>
              <p className="text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
