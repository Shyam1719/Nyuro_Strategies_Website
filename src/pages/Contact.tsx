
import { useState } from 'react';
import { Check, Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form Data:', formData);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Message sent successfully!');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nyuro-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-nyuro-200 bg-white/80 backdrop-blur-sm text-nyuro-800 text-sm font-medium mb-6 animate-fade-in">
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Have questions about our services or want to schedule a consultation? Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in">
                <div className="bg-nyuro-50 rounded-2xl p-8 h-full">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-nyuro-100 text-nyuro-600 flex items-center justify-center mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Our Office</h3>
                        <p className="text-muted-foreground">
                          123 Finance Street, Suite 100<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-nyuro-100 text-nyuro-600 flex items-center justify-center mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Email Us</h3>
                        <p className="text-muted-foreground">contact@nyurostrategies.com</p>
                        <p className="text-muted-foreground">support@nyurostrategies.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-nyuro-100 text-nyuro-600 flex items-center justify-center mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Call Us</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">+1 (555) 987-6543</p>
                      </div>
                    </div>
                  </div>
                  
                  <hr className="border-nyuro-100 my-8" />
                  
                  <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-lg bg-nyuro-100 text-nyuro-600 flex items-center justify-center hover:bg-nyuro-600 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-lg bg-nyuro-100 text-nyuro-600 flex items-center justify-center hover:bg-nyuro-600 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-lg bg-nyuro-100 text-nyuro-600 flex items-center justify-center hover:bg-nyuro-600 hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                  
                  {/* Map placeholder */}
                  <div className="mt-8 rounded-lg overflow-hidden h-48 bg-white border border-nyuro-100">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="text-nyuro-600 mx-auto mb-2" />
                        <span className="text-muted-foreground text-sm">Map integration would appear here</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nyuro-500 focus:border-transparent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nyuro-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nyuro-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="service">Service Information</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nyuro-500 focus:border-transparent transition-colors"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-nyuro-600 hover:bg-nyuro-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-nyuro-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : isSubmitted ? (
                        <span className="inline-flex items-center">
                          <Check className="mr-2" size={18} />
                          Message Sent!
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          <Send className="mr-2" size={18} />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-nyuro-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions about our services and approach
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqs = [
  {
    question: "How do your AI trading models work?",
    answer: "Our AI models utilize deep learning algorithms to analyze vast amounts of market data, identify patterns, and generate trading signals. They continuously learn and adapt to changing market conditions to optimize performance."
  },
  {
    question: "What kind of returns can I expect?",
    answer: "While past performance is not indicative of future results, our strategies are designed to outperform market benchmarks with controlled risk. Results vary based on market conditions and the specific strategy implemented."
  },
  {
    question: "How long does implementation take?",
    answer: "Typically, our implementation process takes 2-4 weeks from initial consultation to deployment, depending on the complexity of your requirements and the level of customization needed."
  },
  {
    question: "Is there a minimum investment requirement?",
    answer: "Yes, our services are designed for professional traders and investors with a minimum portfolio size. Please contact us for specific details based on your chosen service tier."
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "We maintain strict data security protocols and comply with all relevant regulations. Your financial data is encrypted, and we never share your information with third parties without explicit consent."
  }
];

export default ContactPage;
