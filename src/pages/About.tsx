
import { Calendar, Trophy, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nyuro-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-nyuro-200 bg-white/80 backdrop-blur-sm text-nyuro-800 text-sm font-medium mb-6 animate-fade-in">
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              About Nyuro Strategies
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We're reimagining financial trading through the power of artificial intelligence
              and machine learning technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At Nyuro Strategies, our mission is to democratize access to sophisticated financial trading 
                technologies that were previously available only to large institutions. We believe that by 
                harnessing the power of artificial intelligence, we can level the playing field and empower 
                individual investors and smaller firms to achieve exceptional results.
              </p>
              <p className="text-muted-foreground">
                We are committed to transparency, continuous innovation, and delivering measurable value 
                to our clients through cutting-edge trading solutions that adapt to evolving market conditions.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                We envision a future where AI-driven trading strategies are accessible to all investors, 
                regardless of their size or resources. Our goal is to become the global leader in AI-powered 
                financial trading solutions, recognized for our innovation, reliability, and consistent 
                delivery of exceptional returns.
              </p>
              <p className="text-muted-foreground">
                By continuously pushing the boundaries of what's possible with artificial intelligence 
                in financial markets, we aim to revolutionize how trading is conducted and establish 
                new standards for performance and risk management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-nyuro-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From our founding to today, we've been driven by innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm hover-card animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 bg-nyuro-100 text-nyuro-600 rounded-lg mb-4 flex items-center justify-center">
                  <highlight.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Our diverse team of experts combines deep financial knowledge with technical innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover-card animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="aspect-[3/3] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-nyuro-600/20 to-nyuro-400/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-nyuro-600">
                    <Users size={48} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-nyuro-600 mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const highlights = [
  {
    title: "Founded in 2018",
    description: "Nyuro Strategies was established by a team of finance and AI experts with a vision to transform trading.",
    icon: Calendar
  },
  {
    title: "Rapid Growth",
    description: "Within 3 years, we expanded our client base to 500+ traders and financial institutions worldwide.",
    icon: Users
  },
  {
    title: "Industry Recognition",
    description: "Our innovative AI models have received multiple awards for performance and technological innovation.",
    icon: Trophy
  }
];

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "CEO & Founder",
    bio: "Former hedge fund manager with 15+ years of experience in algorithmic trading and financial markets."
  },
  {
    name: "Michael Rodriguez",
    role: "Chief AI Officer",
    bio: "PhD in Machine Learning with extensive experience developing predictive models for financial applications."
  },
  {
    name: "Sarah Johnson",
    role: "Head of Client Strategy",
    bio: "Certified Financial Analyst with a passion for helping clients optimize their trading strategies."
  }
];

export default AboutPage;
