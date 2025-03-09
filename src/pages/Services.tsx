
import { Activity, Brain, Cog, LineChart, PieChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nyuro-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-nyuro-200 bg-white/80 backdrop-blur-sm text-nyuro-800 text-sm font-medium mb-6 animate-fade-in">
              <span>Our Offerings</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Discover our suite of AI-powered trading solutions designed to maximize your financial success
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-nyuro-50 text-nyuro-800 text-sm font-medium mb-4">
                    <service.icon size={16} className="mr-2" />
                    <span>{service.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-nyuro-100 text-nyuro-600 flex items-center justify-center mt-1 mr-3">
                          <div className="w-2 h-2 bg-nyuro-600 rounded-full"></div>
                        </div>
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="button-primary bg-nyuro-600 hover:bg-nyuro-700 text-white">
                    Learn More
                  </Link>
                </div>
                
                <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-nyuro-50 to-blue-50 border border-nyuro-100 shadow-lg flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      {service.visual === 'tradingChart' && (
                        <div className="absolute inset-0 flex flex-col">
                          <div className="h-12 flex items-center justify-between px-4 border-b border-gray-100">
                            <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
                            <div className="flex space-x-2">
                              <div className="w-8 h-4 bg-gray-200 rounded-md"></div>
                              <div className="w-8 h-4 bg-gray-200 rounded-md"></div>
                            </div>
                          </div>
                          <div className="flex-1 p-4 flex flex-col">
                            <div className="flex justify-between mb-4">
                              <div className="text-xl font-bold text-nyuro-700">NYURO</div>
                              <div className="text-xl font-bold text-green-600">+24.8%</div>
                            </div>
                            <div className="flex-1 flex items-end space-x-1">
                              {[40, 42, 45, 50, 48, 52, 58, 56, 61, 65, 63, 68, 72, 70, 75, 73, 78, 82, 85, 83, 87, 92, 90, 95].map((height, i) => (
                                <div key={i} className="flex-1 transition-all duration-1000" style={{ 
                                  height: `${height}%`, 
                                  animationDelay: `${i * 0.1}s`,
                                  background: `linear-gradient(180deg, rgba(14, 143, 232, ${0.3 + (height/200)}) 0%, rgba(14, 143, 232, 0.1) 100%)`,
                                  borderRadius: '3px 3px 0 0'
                                }}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {service.visual === 'aiNetwork' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-3/4 h-3/4">
                            {/* Nodes */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-nyuro-600 rounded-full flex items-center justify-center text-white z-10 animate-pulse">
                              <Brain size={32} />
                            </div>
                            
                            {Array.from({ length: 12 }).map((_, i) => {
                              const angle = (i / 12) * 2 * Math.PI;
                              const radius = 130;
                              const x = Math.cos(angle) * radius;
                              const y = Math.sin(angle) * radius;
                              
                              return (
                                <div 
                                  key={i}
                                  className="absolute w-8 h-8 bg-nyuro-100 border border-nyuro-200 rounded-full flex items-center justify-center"
                                  style={{ 
                                    left: `calc(50% + ${x}px - 16px)`, 
                                    top: `calc(50% + ${y}px - 16px)`,
                                    animationDelay: `${i * 0.2}s`,
                                    animation: 'float 3s ease-in-out infinite'
                                  }}
                                >
                                  <div className="w-3 h-3 bg-nyuro-500 rounded-full"></div>
                                </div>
                              );
                            })}
                            
                            {/* Connection lines */}
                            <svg className="absolute inset-0 w-full h-full z-0">
                              {Array.from({ length: 12 }).map((_, i) => {
                                const angle = (i / 12) * 2 * Math.PI;
                                const radius = 130;
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;
                                
                                return (
                                  <line 
                                    key={i}
                                    x1="50%" 
                                    y1="50%" 
                                    x2={`calc(50% + ${x}px)`} 
                                    y2={`calc(50% + ${y}px)`} 
                                    stroke="#0e8fe8" 
                                    strokeWidth="2" 
                                    strokeOpacity="0.3" 
                                  />
                                );
                              })}
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {service.visual === 'customSolution' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-4 w-full h-full p-8">
                            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center">
                              <LineChart size={32} className="text-nyuro-600 mb-3" />
                              <div className="text-center text-sm font-medium">Technical Analysis</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center">
                              <PieChart size={32} className="text-nyuro-600 mb-3" />
                              <div className="text-center text-sm font-medium">Portfolio Allocation</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center">
                              <Activity size={32} className="text-nyuro-600 mb-3" />
                              <div className="text-center text-sm font-medium">Risk Management</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center">
                              <Cog size={32} className="text-nyuro-600 mb-3" />
                              <div className="text-center text-sm font-medium">Custom Parameters</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-nyuro-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Implementation Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a systematic approach to ensure our services meet your specific trading requirements
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm hover-card relative animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-nyuro-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-nyuro-600 to-nyuro-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Trading?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you implement the perfect AI trading solution for your needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-nyuro-900 hover:bg-gray-100 transition-colors rounded-md px-8 py-3 font-medium"
            >
              Schedule a Consultation
              <Zap size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const mainServices = [
  {
    title: "AI Trading Models",
    category: "Advanced Technology",
    icon: Brain,
    description: "Our proprietary AI trading models leverage deep learning and neural networks to identify profitable trading opportunities across various market conditions.",
    features: [
      "Adaptive learning algorithms that evolve with market changes",
      "Multi-factor analysis incorporating economic indicators, news sentiment, and technical patterns",
      "Backtested strategies with proven performance across different market cycles",
      "Real-time signal generation with precision entry and exit points"
    ],
    visual: "tradingChart"
  },
  {
    title: "Predictive Analytics",
    category: "Market Intelligence",
    icon: Activity,
    description: "Transform vast amounts of financial data into actionable insights with our predictive analytics capabilities, allowing you to anticipate market movements before they occur.",
    features: [
      "Advanced pattern recognition for early trend identification",
      "Volatility forecasting to optimize position sizing and risk management",
      "Correlation analysis across multiple asset classes",
      "Scenario modeling to prepare for various market events"
    ],
    visual: "aiNetwork"
  },
  {
    title: "Customized Solutions",
    category: "Tailored Services",
    icon: Cog,
    description: "We develop personalized trading solutions that align with your specific investment goals, risk tolerance, and capital requirements.",
    features: [
      "Customized strategy development based on your trading objectives",
      "Integration with your existing trading infrastructure",
      "Personalized risk parameters and portfolio allocation",
      "Ongoing optimization and performance reviews"
    ],
    visual: "customSolution"
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "We assess your trading objectives, risk profile, and current strategies to understand your specific needs."
  },
  {
    title: "Analysis",
    description: "Our team analyzes your requirements and designs a tailored solution that aligns with your financial goals."
  },
  {
    title: "Implementation",
    description: "We deploy our AI models and integrate them seamlessly with your existing trading systems."
  },
  {
    title: "Optimization",
    description: "Continuous monitoring and refinement ensure optimal performance and adaptation to changing market conditions."
  }
];

export default ServicesPage;
