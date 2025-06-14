import React, { useRef } from 'react';
import { Shield, Mail, BarChart3, Activity, Lock, AlertTriangle, Users, Database, Zap } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStart = () => {
    navigate('/dashbord');
  };

  const features = [
    { icon: <Mail className="w-8 h-8" />, title: "Scan Email", description: "Deep dive into your email security and discover potential vulnerabilities" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Risk Meter", description: "Real-time assessment of your digital security posture" },
    { icon: <Activity className="w-8 h-8" />, title: "Breach Chart", description: "Visualize and track security incidents across your digital footprint" }
  ];

  const stats = [
    { number: "500+", label: "Emails Scanned" },
    { number: "250+", label: "Threats Detected" },
    { number: "90.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Monitoring" }
  ];

  // const securityFeatures = [
  //   { icon: <Shield className="w-6 h-6" />, title: "Advanced Threat Detection", description: "AI-powered analysis identifies sophisticated cyber threats" },
  //   { icon: <Lock className="w-6 h-6" />, title: "Data Encryption", description: "Military-grade encryption protects your sensitive information" },
  //   { icon: <AlertTriangle className="w-6 h-6" />, title: "Real-time Alerts", description: "Instant notifications when security risks are detected" },
  //   { icon: <Database className="w-6 h-6" />, title: "Breach Monitoring", description: "Continuous monitoring of data breaches across the dark web" },
  //   { icon: <Users className="w-6 h-6" />, title: "Identity Protection", description: "Safeguard your personal and professional digital identity" },
  //   { icon: <Zap className="w-6 h-6" />, title: "Instant Response", description: "Automated security responses to neutralize threats quickly" }
  // ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    {/* //   Navigation */}
      <nav className="bg-gray-800 px-6 py-4 border-b border-gray-700 fixed top-0 right-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">CyberScope</h1>
          <div className="flex items-center space-x-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-orange-500 hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="text-orange-500 hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-orange-500 hover:text-white transition-colors cursor-pointer">Contact</button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section className="pt-50 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Is Your <span className="text-orange-500">Digital Identity</span> Safe?</h1>
        <p className="text-xl text-gray-400 mb-12">Uncover breaches. Secure your email. Stay ahead of cyber threats.</p>
        <h2 className="text-4xl font-bold mb-6">Don't Wait for a <span className="text-orange-500">Breach</span></h2>
        <p className="text-xl text-gray-400 mb-8">Take control of your digital security today. Start with a free email scan.</p>
        <button onClick={handleStart} className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:text-gray-800 cursor-pointer">
          Get Started Free
        </button>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Comprehensive <span className="text-orange-500">Security Suite</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all hover:scale-105">
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contact <span className="text-orange-500">Support</span></h2>
          <div className="text-center text-gray-400">
            <p>Email us at <a href="mailto:support@cyberscope.com" className="text-orange-400 hover:underline">support@cyberscope.com</a></p>
            <p>or call 1800-000-123</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">CyberScope</h3>
              <p className="text-gray-400">Protecting your digital identity with advanced cybersecurity solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email Security</li>
                <li>Risk Assessment</li>
                <li>Breach Monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li onClick={() => scrollToSection(aboutRef)} className='cursor-pointer hover:text-orange-400'>About Us</li>
                <li onClick={() => scrollToSection(contactRef)} className='cursor-pointer hover:text-orange-400'>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CyberScope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
