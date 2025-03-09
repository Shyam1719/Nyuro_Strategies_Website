
import { ArrowRight, BarChart3, Brain, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nyuro-50/50 to-white pointer-events-none"></div>
        
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nyuro-200/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-nyuro-100/40 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-nyuro-200 bg-white/80 backdrop-blur-sm text-nyuro-800 text-sm font-medium mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-nyuro-500 mr-2"></span>
              <span>Revolutionizing financial trading</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              AI-Powered Trading <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-nyuro-600 to-nyuro-400">
                For The Modern Investor
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Nyuro Strategies combines cutting-edge artificial intelligence with financial 
              expertise to deliver trading solutions that outperform the market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/services" 
                className="button-primary bg-nyuro-600 hover:bg-nyuro-700 text-white rounded-md px-6 py-3 font-medium flex items-center justify-center gap-2 transition-all"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              
              <Link 
                to="/about" 
                className="button-secondary border-nyuro-200 hover:bg-nyuro-50 flex items-center justify-center gap-2"
              >
                Learn More
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
          
          {/* Hero Image/Visualization */}
          <div className="relative mx-auto max-w-5xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl glass-card">
              <div className="w-full h-full bg-gradient-to-tr from-nyuro-50 to-blue-50 flex items-center justify-center">
                <div className="flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
                    {/* Chart Visualization */}
                    <div className="col-span-2 bg-white rounded-xl shadow-lg p-4 h-64">
                      <div className="h-8 flex items-center justify-between mb-4">
                        <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
                        <div className="flex space-x-2">
                          <div className="w-8 h-4 bg-gray-200 rounded-md"></div>
                          <div className="w-8 h-4 bg-gray-200 rounded-md"></div>
                        </div>
                      </div>
                      <div className="h-40 flex items-end space-x-2">
                        {[40, 65, 50, 80, 65, 90, 70, 95, 85, 100, 90, 110, 100, 120, 110, 125].map((height, i) => (
                          <div key={i} className="flex-1 transition-all duration-1000" style={{ 
                            height: `${height}%`, 
                            animationDelay: `${i * 0.1}s`,
                            background: `linear-gradient(180deg, rgba(14, 143, 232, ${0.3 + (height/200)}) 0%, rgba(14, 143, 232, 0.1) 100%)`,
                            borderRadius: '3px 3px 0 0'
                          }}></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats Card */}
                    <div className="flex flex-col space-y-4">
                      <div className="bg-white rounded-xl shadow-lg p-4 flex-1 flex flex-col justify-center">
                        <div className="text-sm text-gray-500 mb-1">Annual Growth</div>
                        <div className="text-2xl font-bold text-nyuro-600">+24.8%</div>
                        <div className="flex items-center text-green-600 text-sm mt-2">
                          <TrendingUp size={14} className="mr-1" />
                          <span>+3.2% today</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-lg p-4 flex-1 flex flex-col justify-center">
                        <div className="text-sm text-gray-500 mb-1">AI Confidence</div>
                        <div className="text-2xl font-bold text-nyuro-600">96.7%</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div className="bg-nyuro-500 h-1.5 rounded-full" style={{ width: '96.7%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Why Choose Nyuro Strategies</h2>
            <p className="text-lg text-muted-foreground">
              Our innovative approach to AI-powered trading delivers exceptional results through advanced technology and financial expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover-card",
                  "group transition-all duration-300"
                )}
              >
                <div className="w-12 h-12 bg-nyuro-50 text-nyuro-600 rounded-lg mb-4 flex items-center justify-center group-hover:bg-nyuro-600 group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nyuro-900 to-nyuro-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Trading Strategy?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of successful traders and investors who have elevated their performance with Nyuro Strategies.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-nyuro-900 hover:bg-gray-100 transition-colors rounded-md px-8 py-3 font-medium"
            >
              Get Started Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Advanced AI Models",
    description: "Our proprietary AI algorithms analyze millions of data points to identify trading opportunities with high precision.",
    icon: Brain
  },
  {
    title: "Real-time Analytics",
    description: "Access comprehensive market insights and performance metrics through our intuitive dashboard.",
    icon: BarChart3
  },
  {
    title: "Consistent Returns",
    description: "Our strategies are designed to deliver stable returns regardless of market volatility and economic conditions.",
    icon: TrendingUp
  }
];

export default HomePage;
